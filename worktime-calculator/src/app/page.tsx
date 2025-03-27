"use client";

import { useState, useEffect } from "react";
import { MainCard } from "../components/cards/MainCard";
import { SettingsCard } from "../components/cards/SettingsCard";
import { parseTimeString, timeToMinutes, minutesToTime, formatTime, getCurrentTime } from "./utils/timeUtils";


export default function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [requiredHours, setRequiredHours] = useState("07:15");
  const [breakDuration, setBreakDuration] = useState("00:30");
  
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
    let _endTime = "";
    let _requiredHours = requiredHours;
    let _breakDuration = breakDuration;

    // calculate startTime & endTime
    if (_startTime === "") {
      _startTime = getCurrentTime();
    }

    _endTime = calculateEndTime(_startTime, _requiredHours, _breakDuration)

    // Construct the output string
    let outputString = `⏰ Worktime Summary\n\nStart Time:              ${_startTime || "--:--"} Uhr\nEnd Time:                ${_endTime || "00:00"} Uhr\nWorkhours:               ${_requiredHours || "00:00"} h\nBreak:                   ${_breakDuration || "00:00"} h`

    // Update display
      // Start animation sequence
      setAnimate(false);
        
      setTimeout(() => {
        // Determine what to display based on whether there was an error
        if (errorMessage) {
          setDisplayValue(`⚠️ Error\n\n${errorMessage}`);
        } else {
          // Now endTime state is guaranteed to be updated
          setDisplayValue(outputString);
        }
        
        setAnimate(true);
        setHighlightDisplay(!errorMessage); // Only highlight on success
        
        // Reset the flag for next calculation
      }, animation_delay);

      setisDisabed(false);
  }
  
  function resetDisplay() {
    setAnimate(false);
    setTimeout(() => {
      setDisplayValue("");
      setAnimate(true);
      setHighlightDisplay(false);
      setStartTime("")
    }, animation_delay)
    setisDisabed(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12">
      <h1 className="text-5xl font-bold text-gray-100 font-arimo">
        Worktime Calculator
      </h1>
      <div className='relative flex flex-row'>
        <MainCard 
          StartTime={startTime}
          setStartTime={setStartTime}
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
    </main>
  );
}
