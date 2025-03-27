"use client"

import clsx from "clsx";
import React, { useState, useEffect } from 'react';
import { parseTimeString } from '../../app/utils/timeUtils';

interface InputBoxProps{
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string; 
    width?: string; 
    height?: string;
    multiline?: boolean 
}

export function InputBox({
    label,
    placeholder,
    value,
    onChange,
    className,
    width = "w-full",
    height = "h-8",
    multiline = false
}: InputBoxProps) {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!value || value.trim() === "") {
            setError(false);
            return
        }

        // Check format
        const result = parseTimeString(value);
        if (!result) {
            setError(true);
        } else {
            setError(false)
        }
    }, [value]);
    
    return (
        <div className={clsx("flex flex-col", width)}>
        {label && <label className="mb-1 text-gray-700 font-semibold text-sm">{label}</label>}
        {multiline ? (
            <textarea    
                disabled={false}    
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={clsx(
                    "border border-gray-300 bg-gray-100 text-gray-600 rounded-lg px-3 py-2 focus:ring focus:ring-green-100 outline-none resize-none",
                    error ? "border-red-600" : "",
                    width,
                    height,
                    className)}
            />
        ) : (
            <input
                disabled={false}    
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={clsx(
                    "border border-gray-300 bg-gray-100 text-gray-700 rounded-lg px-3 py-2 focus:ring focus:ring-green-100 outline-none",
                    error ? "border-red-400 border-2 focus:ring-red-200" : "",
                    width,
                    height,
                    className
                )}
            />
        )}
        </div>
    );
}

export function DisplayBox({
    multiline = true,
    label,
    value,
    className,
    width = "w-full",
    height = multiline ? "h-32" : "h-10",
}: InputBoxProps) {
    // Process the value to replace "\n" with actual newlines
    const processedValue = value?.replace(/\\n/g, '\n');
    
    return (
        <div className={clsx("flex flex-col", width)}>
            {label && <label className="mb-2 mt-4 text-gray-700">{label}</label>}
            {multiline ? (
                <textarea
                    readOnly
                    value={processedValue}
                    className={clsx(
                        "border border-gray-300 bg-gray-100 text-gray-600 rounded-lg px-3 py-2 outline-none resize-none",
                        width,
                        height,
                        className)}
                    style={{ whiteSpace: 'pre-wrap' }}
                />
            ) : (
                <input
                    readOnly
                    type="text"    
                    value={processedValue}
                    className={clsx(
                        "border border-gray-300 bg-gray-100 text-gray-600 rounded-lg px-3 py-2 outline-none resize-none",
                        width,
                        height,
                        className)}
                />
            )}
        </div>
    )
}