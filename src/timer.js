import React from 'react';

import { useState } from 'react';
import Action from "./actions";
import Progress from "./progress"


function Timer() {
    const [toggleForm, setToggleform] = useState(false);
    // store the input mins
    const [timeInput, setTimeInput] = useState(1);
    // toggle start and stop
    const [countDownStarted, setCountDownStarted] = useState(false);
    // start timer

    const startTimer = () => {
        setCountDownStarted(true)
    }
    // stop timer
    const stopTimer = () => {
        setCountDownStarted(false)
    }


    // toggle the form, does the opposite of the start state
    const onToggle = () => {
        setToggleform(toggle => toggle = !toggle);
    }
    const handleChange = (e) => {
        const inputData = parseInt(e.target.value);
        setTimeInput(inputData)
    }
    return (
        <div className='timer' >
            <Progress />
            <Action {...{
                toggleForm, onToggle, timeInput, handleChange, countDownStarted, startTimer, stopTimer
            }} />
        </div>
    )
}

export default Timer