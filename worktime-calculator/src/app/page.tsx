"use client";
import { Button } from '../components/ui/Button';

export default function Home() {
  function buttonClick(){
    alert('Button has been clicked! Yay!')
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 space-y-12">
      <h1 className="text-4xl font-bold text-gray-700">
        Worktime Calculator
      </h1>
      <Button variant='secondary' onClick={buttonClick}>
      ⚠️ Test Button
      </Button>
    </main>
  );
}
