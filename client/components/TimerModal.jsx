import React, { Component, useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useSelector } from "react-redux";

const TimerModal = (props) => {
  const {currentProjectName, currentCategoryName, startTimer} = props;
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    let interval = null;
    if (startTimer !== 0) {
      setIsActive(true);
      interval = setInterval(() => {
        if(seconds < 60){
          setSeconds(seconds => seconds + 1)
        }else{
          setMinutes(minutes => minutes + 1);
          setSeconds(0);
        };
      }, 1000);
    } else if (startTimer === 0 && seconds !== 0) {
      clearInterval(interval);
      setMinutes(0);
      setSeconds(0);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, startTimer]);

  return (
    <div className="project"> 
      <div id='timer'>
        <h2>You are working on:</h2>
        <h2 id='intrack'>{currentCategoryName} {currentProjectName}</h2>
        <h2>for:
          <div id='clock'><span className='time'>{minutes}m</span>:<span className='time'>{seconds}s</span></div>
        </h2>
      </div>
    </div>
  );
};

export default TimerModal;