"use client";

import { useState } from "react";
import { MainCard } from "../components/cards/MainCard";
import { SettingsCard } from "../components/cards/SettingsCard";
import { parseTimeString, timeToMinutes, minutesToTime, formatTime, getCurrentTime } from "./utils/timeUtils";


export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [requiredHours, setRequiredHours] = useState("07:15");
  const [breakDuration, setBreakDuration] = useState("00:30");
  
  const [ShowSummary, setShowSummary] = useState(false);
  const [SettingsIsHidden, setSettingsIsHidden] = useState(true);
  const [highlightDisplay, setHighlightDisplay] = useState(false);
  const [animate, setAnimate] = useState(true);
  const animation_delay = 200;
  const [isDisabled, setisDisabed] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  
  function calculateEndTime(_startTime: string, _requiredHours: string, _breakDuration:string) {
    // Reset error message
    setErrorMessage("");

    // Validate start time
    const startTimeObj = parseTimeString(_startTime);
    if (!startTimeObj) {
      setErrorMessage("Please enter a valid start time (HH:MM)");
    }

    // Validate required hours
    const requiredTimeObj = parseTimeString(_requiredHours);
    if (!requiredTimeObj) {
      setErrorMessage("Please enter valid required hours (HH:MM)");
    }

    // Validate break duration
    const breakObj = parseTimeString(_breakDuration);
    if (!breakObj) {
      setErrorMessage("Please enter a valid break duration (HH:MM)");
    }

    // Convert all times to minutes for easier calculation
    const startTimeMin = timeToMinutes(startTimeObj);
    const requiredTimeMin = timeToMinutes(requiredTimeObj);
    const breakMin = timeToMinutes(breakObj);

    // Calculate end time (start time + required hours + break)
    const endTimeMinutes = startTimeMin + requiredTimeMin + breakMin;
    
    // Convert back to hours:minutes format
    const endTimeObj = minutesToTime(endTimeMinutes);
    const formattedEndTime = formatTime(endTimeObj);
  
    return formattedEndTime;
  }

  function buttonClick(){
    // Set local variables to store values
    let _startTime = startTime;
    const _requiredHours = requiredHours;
    const _breakDuration = breakDuration;

    // calculate startTime & endTime
    if (_startTime === "") {
      _startTime = getCurrentTime();
      setStartTime(getCurrentTime());
    }

    setEndTime(calculateEndTime(_startTime, _requiredHours, _breakDuration))

    // Update display
      // Start animation sequence
      setAnimate(false);
        
      setTimeout(() => {
        //Update display show boolean
        setShowSummary(true)
        
        setAnimate(true);
        setHighlightDisplay(true); // Only highlight on success
        
        // Reset the flag for next calculation
      }, animation_delay);

      setisDisabed(false);
  }
  
  function resetDisplay() {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
      setHighlightDisplay(false);
      setStartTime("")
    }, animation_delay)
    setisDisabed(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-12 p-6 sm:p-0">
        <h1 className="text-5xl text-center font-bold text-gray-100">
          Worktime Calculator
        </h1>
        <div className='relative flex flex-row'>
          <MainCard 
            StartTime={startTime}
            setStartTime={setStartTime}
            EndTime={endTime}
            RequiredHours={requiredHours}
            BreakDuration={breakDuration}
            ShowSummary={ShowSummary}
            DisplayValue={displayValue}
            setDisplayValue={setDisplayValue}
            SettingsIsHidden={SettingsIsHidden}
            setSettingsIsHidden={setSettingsIsHidden}
            buttonClick={buttonClick}
            animate={animate}
            highlightDisplay={highlightDisplay}
            resetDisplay={resetDisplay}
            resetButtonisDisabled={isDisabled}
          />
          <SettingsCard 
            RequiredHours={requiredHours}
            setRequiredHours={setRequiredHours}
            BreakDuration={breakDuration}
            setBreakDuration={setBreakDuration}
            SettingsIsHidden={SettingsIsHidden}
          />
        </div>
      </div>
    </main>
  );
}
