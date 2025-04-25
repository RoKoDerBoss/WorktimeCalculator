"use client"

import { Button } from '../ui/Button';
import { Card, CardTitle, CardContent, CardFooter } from '../ui/Card' 
import { InputBox, DisplayBox } from '../ui/InputBox';
import { IconButton } from '../ui/IconButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

interface MainCardProps {
    StartTime: string;
    setStartTime: (value: string) => void;
    DisplayValue: string;
    setDisplayValue: (value: string) => void;
    SettingsIsHidden: boolean;
    setSettingsIsHidden: (value: boolean) => void;
    buttonClick: () => void;
    animate: boolean;
    highlightDisplay: boolean;
    resetDisplay: () => void;
    resetButtonisDisabled: boolean;
}

export function MainCard({
    StartTime,
    setStartTime,
    DisplayValue,
    SettingsIsHidden,
    setSettingsIsHidden,
    buttonClick,
    animate,
    highlightDisplay,
    resetDisplay,
    resetButtonisDisabled,
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
                value= {DisplayValue}
                className={`mt-6 mb-6 font-semibold font-mono text-base h-44 border-2 transition-all duration-500 ease-in-out 
                    ${highlightDisplay ? 'border-green-400' : ''} 
                    ${animate ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`
                }
            />
          <InputBox
              value={StartTime}
              width='w-full'
              label='Starting Time (optional)'
              placeholder='08:00'
              onChange={(e) => setStartTime(e.target.value)}
            />
          <CardFooter>
            <div className='flex items-center justify-center relative space-x-4'>
            <Button onClick={resetDisplay} className='w-40' disabled={resetButtonisDisabled} variant='secondary'>
                Reset
              </Button>
              <Button onClick={buttonClick} className='w-40'>
                Calculate
              </Button>
            </div>
          </CardFooter>
        </Card>
    )
}
