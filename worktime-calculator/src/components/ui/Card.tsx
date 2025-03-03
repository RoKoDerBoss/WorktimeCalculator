"use client";

import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({children, className = ""}: CardProps) {
    return (
        <div className={`bg-gray-50 rounded-lg border border-gray-300 p-6 shadow-md ${className} !important`}>
            {children}
        </div>
    )
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <h2 className={`text-2xl text-gray-700 font-bold ${className}`}>{children}</h2>;
  }

export function CardContent({children, className = ""}: {children: React.ReactNode; className?: string}) {
    return <div className={`text-gray-700 w-full overflow-hidden break-words whitespace-normal overflow-wrap-normal ${className}`}>{children}</div>
}

export function CardHeader({title, action}: {title: React.ReactNode; action: React.ReactNode;}) {
        return (
            <div className="flex justify-between items-center mb-4">
                <CardTitle>{title}</CardTitle>
                {action}
            </div>
        );
    }

export function CardFooter({children}: {children: React.ReactNode}) {
    return <div className="flex justify-center border-t pt-4 mt-4">{children}</div>
}