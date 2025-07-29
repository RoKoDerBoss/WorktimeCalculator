import { clsx } from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

interface DisplayProps {
    start_time?: string;
    end_time?: string;
    required_hours?: string;
    break_duration?: string;
    show_summary: boolean;
    className?: string;
    width?: string;
    label?: string;
}

export function Display({
    start_time,
    end_time,
    required_hours,
    break_duration,
    className,
    show_summary,
    width = "w-full",
    label = "",
}: DisplayProps) {
    
    // Error handling for incomplete data
    const hasIncompleteData = !start_time || !end_time || required_hours === undefined || break_duration === undefined;
    
    if (hasIncompleteData) {
        return (
            <div className={clsx("flex flex-col", width)}>
                {label && <label className="text-gray-700 font-bold">{label}</label>}
                <div className={clsx(
                    "border border-2 border-gray-300 bg-gray-100 text-gray-600 rounded-lg py-4 px-3 outline-none resize-none",
                    width,
                    className
                )}>
                    <div className="flex min-h-36 justify-center items-center space-x-3">
                        <span> </span>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className={clsx("flex flex-col space-y-1", width, className)}>
            {label && <label className="text-gray-700 font-bold">{label}</label>}
            <div className={clsx(
                "border border-2 border-gray-300 bg-gray-100 text-gray-600 rounded-lg py-4 px-3 outline-none resize-none",
                width
            )}>
                <div className="space-y-4">
                    {show_summary ? (
                        <>
                            <div className='flex justify-center'>
                                <span className='text-base font-bold'>⏰ Worktime Summary</span>
                            </div>
                            <div className='space-y-1 px-2'>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-mono font-semibold">Start Time:</span>
                                    <span>{start_time}</span>
                                </div>
                                <div className="flex justify-between  items-center">
                                    <span className="text-sm font-mono font-semibold">End Time:</span>
                                    <span>{end_time}</span>
                                </div>
                                <div className="flex justify-between  items-center">
                                    <span className="text-sm font-mono font-semibold">Workhours:</span>
                                    <span>{required_hours}</span>
                                </div>
                                <div className="flex justify-between  items-center">
                                    <span className="text-sm font-mono font-semibold">Break:</span>
                                    <span>{break_duration}</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='flex min-h-36' />
                    )}
                </div>
            </div>
        </div>
    );
}