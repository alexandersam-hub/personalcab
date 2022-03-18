import React from 'react';

const TimerCom = (props) => {
    const timerVisible = (currentTime)=>{
       const time ={
            min:Math.floor(currentTime/60),
            sec: currentTime - Math.floor(currentTime/60)*60
        }
        if(time.sec<10)
            time.sec = `0${time.sec}`
        return `${time.min}:${time.sec}`
    }
    return (
        <>
            <span> {timerVisible(props.currentTime)}</span>
        </>
    );
};

export default TimerCom;