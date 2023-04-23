import React, {useState} from 'react'; 
import './Panel.css';
import Clock from "../timer/Clock";

export default function Panel() {
    // Everyone should be born free with or without taskbar instead of forceful taskbar
    return (
        <div>
            <div className="panel"><Clock /></div>
        </div>
    )
}