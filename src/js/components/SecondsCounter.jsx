import React from 'react';

const SecondsCounter = (props) => {
    let formattedSeconds = String(props.seconds).padStart(6, '0');

    const digitOne = formattedSeconds[5];
    const digitTwo = formattedSeconds[4]; 
    const digitThree = formattedSeconds[3];
    const digitFour = formattedSeconds[2];
    const digitFive = formattedSeconds[1];
    const digitSix = formattedSeconds[0];

    return (
        <div className="big-counter">
            <div className="calendar">
                <i class="fa-sharp-duotone fa-solid fa-clock"></i>
            </div>
            <div className="six">{digitSix}</div>
            <div className="five">{digitFive}</div>
            <div className="four">{digitFour}</div>
            <div className="three">{digitThree}</div>
            <div className="two">{digitTwo}</div>
            <div className="one">{digitOne}</div>
        </div>
    );
};

export default SecondsCounter;