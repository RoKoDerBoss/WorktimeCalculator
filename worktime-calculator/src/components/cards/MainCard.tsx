"use client"

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardTitle, CardContent, CardFooter } from '../ui/Card' 
import { InputBox, DisplayBox } from '../ui/InputBox';
import { IconButton } from '../ui/IconButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

interface MainCardProps {
    StartTime: string;
    setStartTime: (value: string) => void;
    DisplayValue: string;
    setDisplayValue: (value: string) => void;
    SettingsIsHidden: boolean;
    setSettingsIsHidden: (value: boolean) => void;
    buttonClick: () => void;
    loading: boolean;
}

export function MainCard({
    StartTime,
    setStartTime,
    DisplayValue,
    setDisplayValue,
    SettingsIsHidden,
    setSettingsIsHidden,
    buttonClick,
    loading,
}: MainCardProps) {
    return (
        <Card className='w-96'>
          <div className='flex justify-between items-center mb-4'>
            <CardTitle className='text-left'>Start calculating</CardTitle>
            <IconButton icon={<FontAwesomeIcon icon={faGear} />} onClick={() => setSettingsIsHidden(!SettingsIsHidden)} size='md' />
          </div>
          <CardContent>
            This tool calculates the remaining worktime until you're free like Dobby!
          </CardContent>
          <DisplayBox
              multiline={true}
              value= {DisplayValue} //"This is Line1\nThis is Line2\nThis is Line3"
              className="mt-6 mb-6 font-semibold font-mono h-36"
            />
          <InputBox
              value={StartTime}
              width='w-full'
              label='Starting Time (optional)'
              placeholder='08:00'
              onChange={(e) => setStartTime(e.target.value)}
            />
          <CardFooter>
            <div className='flex items-center justify-center relative'>
              <Button onClick={buttonClick} loading={loading} className='w-40'>
                Calculate
              </Button>
              <div className='absolute left-full'>
              <IconButton icon={<FontAwesomeIcon icon={faRotateLeft} />} onClick={() => setDisplayValue("\n\n                ...")} size='md'/>
              </div>
            </div>
          </CardFooter>
        </Card>
    )
}
