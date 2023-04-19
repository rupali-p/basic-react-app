import React from 'react';
import "./style.css";
import Action from "./actions";
import Progress from "./progress"


function timer() {
    return (
        <div className='timer' >
            <Progress>

            </Progress>
            <Action>

            </Action>
        </div>
    )
}

export default timer