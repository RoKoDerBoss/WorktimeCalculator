"use client";

import clsx from "clsx";
import { MouseEventHandler, ReactNode } from "react";

interface IconButtonProps{
    icon: ReactNode; // The icon component (e.g., from Lucide or FontAwesome)
    label?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    size?: "sm" | "md" | "lg";
    color?: "gray" | "blue" | "red" | "green";
    className?: string;
}

export function IconButton({
    icon,
    label,
    onClick,
    size = "md",
    color = "gray",
  className
}: IconButtonProps) {
    const sizeClasses = {
        sm: "w-6 h-6 text-sm",
        md: "w-8 h-8 text-base",
        lg: "w-10 h-10 text-lg",
    };
    
    const colorClasses = {
        gray: "text-gray-500 hover:text-gray-700",
        blue: "text-blue-500 hover:text-blue-700",
        red: "text-red-500 hover:text-red-700",
        green: "text-green-500 hover:text-green-700",
    };
    
    return(
        <div
            onClick={onClick}
            className={clsx("flex items-center space-x-2 cursor-pointer select-none", className)}
        >
            <div
                className={clsx("flex justify-center items-center rounded-full p-2 transition-colors", sizeClasses[size], colorClasses[color])}
            >
                {icon}
            </div>
            {label && <span className="text-sm font-medium">{label}</span>}
        </div>
    )
}