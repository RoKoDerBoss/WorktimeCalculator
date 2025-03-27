"use client"

import clsx from "clsx";

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