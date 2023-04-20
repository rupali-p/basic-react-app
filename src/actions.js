import React from 'react'

function Actions({ toggleForm, onToggle, timeInput, handleChange, countDownStarted, startTimer, stopTimer }) {
    return (
        <div className='ac-container'>
            <div className='btn-container'>
                {!countDownStarted ? <button onClick={() => startTimer()}>Start</button> :
                    <button onClick={() => stopTimer()}>Stop</button>}
                <button onClick={onToggle}>Set Time</button>
            </div>
            {toggleForm ?
                <div className='input-form'>
                    <input type="number" placeholder='Please enter time...'
                        onChange={handleChange}
                        defaultValue={timeInput}
                    ></input>

                </div> : null
            }
            <div className='used-container'>
                <div className='used-timers'>
                    <h2>Most used timers</h2>
                    <ul>
                        <li>
                            <button>1 min</button>
                        </li>
                        <li>
                            <button>2 mins</button>
                        </li>
                        <li>
                            <button>3 mins</button>
                        </li>
                        <li>
                            <button>5 mins</button>
                        </li>
                        <li>
                            <button>10 mins</button>
                        </li>
                        <li>
                            <button>20 mins</button>
                        </li>
                        <li>
                            <button>30 mins</button>
                        </li>
                    </ul>
                </div>
                <div className='reset'>
                    <button>Clear</button>
                </div>
            </div>

        </div>
    )
}

export default Actions;