"use client"

import { useState } from 'react';
import { Card, CardTitle } from '../ui/Card' 
import { InputBox } from '../ui/InputBox';

interface SettingsCardProps {
    RequiredHours: string;
    setRequiredHours: (value: string) => void;
    SettingsIsHidden: boolean;
}

export function SettingsCard({
    RequiredHours,
    setRequiredHours,
    SettingsIsHidden
}: SettingsCardProps) {
    return (
        <Card className={`absolute left-full h-full min-h-inherit ml-2 top-0 !bg-gray-200 w-64 ${SettingsIsHidden ? "hidden" : "block"}`}>
          <CardTitle>Settings</CardTitle>
          <InputBox 
            label="Required Hours"
            value={RequiredHours}
            onChange={(e) => setRequiredHours(e.target.value)}
          />
        </Card>
    )
}