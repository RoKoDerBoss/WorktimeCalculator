"use client";

import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardTitle, CardContent, CardFooter } from '../components/ui/Card' 
import { InputBox, DisplayBox } from '../components/ui/InputBox';

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [StartTime, setStartTime] = useState("")
  
  function buttonClick(){
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert(`Button has been clicked!
        \nStartTime: ${StartTime || "Not provided"}`)
    }, 1000);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12">
      <h1 className="text-5xl font-bold text-gray-100 font-arimo">
        Worktime Calculator
      </h1>
      <Card className='w-96'>
        <CardTitle className='text-left'>
          Start calculating
        </CardTitle>
        <CardContent>
          This tool calculates the remaining worktime until you're free like Dobby!
        </CardContent>
        <DisplayBox
            multiline={true}
            value="This is Line1\nThis is Line2\nThis is Line3"
            className="mt-6 mb-6"
          />
        <InputBox
            value={StartTime}
            width='w-full'
            label='Starting Time (optional)'
            placeholder='08:00'
            onChange={(e) => setStartTime(e.target.value)}
          />
        <CardFooter>
          <div>
            <Button onClick={buttonClick} loading={loading} className='w-40'>
              Calculate
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
