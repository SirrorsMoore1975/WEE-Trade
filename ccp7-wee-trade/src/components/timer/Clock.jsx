import React, { useState, useEffect } from 'react';
import "./Clock.css"

// const Clock = () => {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const timer = setInterval(handleTick, 1000);
//         return function clean() {
//             clearInterval(timer)
//         }
//     }, [])

//     const handleTick = () => {
//         setTime(new Date().toLocaleTimeString())
        
//     }

//     return (
//         <div>
//             <div className="clock" onLoad={handleTick}>
//             <p>{time}</p>
//             </div>
//         </div>
        
//     )
// }

function Clock(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);  return (
        <div>
        <span className="clock">
        {date.toLocaleTimeString()}
      </span>
        </div>
      
    );
  }

export default Clock;