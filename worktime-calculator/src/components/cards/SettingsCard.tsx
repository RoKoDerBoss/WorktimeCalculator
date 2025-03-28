"use client"

import { Card, CardTitle } from '../ui/Card' 
import { InputBox } from '../ui/InputBox';

interface SettingsCardProps {
    RequiredHours: string;
    setRequiredHours: (value: string) => void;
    BreakDuration: string;
    setBreakDuration: (value: string) => void;
    SettingsIsHidden: boolean;
}

export function SettingsCard({
    RequiredHours,
    setRequiredHours,
    BreakDuration,
    setBreakDuration,
    SettingsIsHidden
}: SettingsCardProps) {
    return (
        <Card className={`absolute left-full h-full min-h-inherit ml-2 top-0 !bg-gray-200 w-64 transition-all duration-500 ease-in-out transform ${SettingsIsHidden ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
          <CardTitle className='mb-4'>Settings</CardTitle>
          <div className='flex flex-col space-y-2'>
            <InputBox 
              label="Required Hours"
              value={RequiredHours}
              onChange={(e) => setRequiredHours(e.target.value)}
            />
            <InputBox 
              label="Break Duration"
              value={BreakDuration}
              onChange={(e) => setBreakDuration(e.target.value)}
            />
          </div>
        </Card>
    )
}