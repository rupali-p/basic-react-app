import React from 'react'

function actions() {
    return (
        <div className='ac-container'>
            <div className='btn-container'>
                <button>Start</button>
                <button>Set Time</button>
            </div>
            {/* <div className='btn-container'>
                
            </div> */}

            <form>
                <input type="text" placeholder='please enter time'></input>
            </form>
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

export default actions;