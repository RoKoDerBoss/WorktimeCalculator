// Parse a time string (HH:MM format) into hours and minutes
export function parseTimeString(timeStr: string): {hours: number, minutes: number} | null {
    // Basic validation for empty input
    if (!timeStr || timeStr.trim() === '') {
        return null;
    }

    // Use regex to validate and parse HH:MM format
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    const match = timeStr.match(timeRegex);

    if (!match) {
        return null; // Invalid format
    }

    return {
        hours: parseInt(match[1], 10),
        minutes: parseInt(match[2], 10)
    };
}

// Convert time to minutes for easier calculation
export function timeToMinutes(time: {hours: number, minutes: number} | null): number {
    if (!time) {
        return 0;
    }
    return time.hours * 60 + time.minutes
}

// Convert minutes back to hours and minutes
export function minutesToTime(totalMinutes: number): {hours: number, minutes: number} {
    // Handle potential negative time by wrapping around 24 hours
    while (totalMinutes < 0) {
        totalMinutes += 24*60
    }
    // Handle times beyond 24 hours by wrapping
    totalMinutes = totalMinutes % (24*60);

    return {
        hours: Math.floor(totalMinutes / 60),
        minutes: totalMinutes % 60
    };
}

// Format time object to string
export function formatTime(time: {hours: number, minutes: number}): string {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`;
}

// Get current time
export function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}