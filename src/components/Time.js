import React from 'react'

 function Time(props) {
    const ms = props.ms;
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const hours = Math.floor(ms / msPerHour)%60 ;
    const hoursRest = ms % msPerHour;
    const minutes = Math.floor(hoursRest / msPerMinute);
    const minutesRest = hoursRest % msPerMinute;
    const seconds = Math.floor(minutesRest / msPerSecond);
    return (
      <div className="time-container">
        <div className="time-inner-container">
          <span className="time-digits">
            {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
          </span>
          <div className="time-text">
            <span className="time-text-item">Hour</span>
            <span className="time-text-item">Minute</span>
            <span className="time-text-item">Second</span>
          </div>
        </div>
      </div>
    );
  }
  export default Time;