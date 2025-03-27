"use client";

import { useState } from "react";
import { MainCard } from "../components/cards/MainCard";
import { SettingsCard } from "../components/cards/SettingsCard";


export default function Home() {
  const [DisplayValue, setDisplayValue] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [RequiredHours, setRequiredHours] = useState("07:15");
  
  const [SettingsIsHidden, setSettingsIsHidden] = useState(true);
  const [highlightDisplay, setHighlightDisplay] = useState(false);
  const [animate, setAnimate] = useState(true);
  const animation_delay = 200;
  const [isDisabled, setisDisabed] = useState(true);
  
  function buttonClick(){
    setAnimate(false);

    const WorkedHours = RequiredHours;

    setTimeout(() => {
      setDisplayValue(`⏰ Worktime Summary\n\nStart Time:   ${StartTime || "--:--"} Uhr\nEnd Time:     00:00 Uhr\nWorked Hours: ${WorkedHours || "00:00"} h`)
      //setDisplayValue(`⏰ Worktime Summary\n\nStart Time: ${StartTime || "--:--"} Uhr\nEnd Time:     ${EndTime || "00:00"} Uhr\nWorked Hours: ${WorkedHours || "00:00 h"}`)
      
      setAnimate(true);
      setHighlightDisplay(true);
    }, animation_delay)

    setisDisabed(false);
  }
  
  function resetDisplay() {
    setAnimate(false);
    setTimeout(() => {
      setDisplayValue("");
      setAnimate(true);
      setHighlightDisplay(false);
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
          StartTime={StartTime}
          setStartTime={setStartTime}
          DisplayValue={DisplayValue}
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
          RequiredHours={RequiredHours}
          setRequiredHours={setRequiredHours}
          SettingsIsHidden={SettingsIsHidden}
        />
      </div>
    </main>
  );
}
