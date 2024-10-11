import React, {useState, useRef, useEffect} from 'react';
import ComponentD from './componentD';
function ComponentC(){
    const [running, setRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
        if(running){
            intervalRef.current = setInterval(()=>{
              setElapsed(Date.now() - startTimeRef.current);
            },10);
        }
        return ()=>{
            clearInterval(intervalRef.current);
        }       
    },[running]);

    function start(){
        setRunning(true);
        startTimeRef.current = Date.now() - elapsed;
    }
    function stop(){
        setRunning(false);
    }

    function reset(){
        setElapsed(0);
        setRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsed/(1000 * 60 * 60));
        let minutes = Math.floor(elapsed/(1000 * 60) % 60);
        let seconds = Math.floor(elapsed/(1000) % 60);
        let miliseconds = Math.floor((elapsed % 1000) / 10);

        hours = String(hours).padStart( 2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliseconds = String(miliseconds). padStart(2,"0");
        return ` ${minutes} ${seconds} ${miliseconds}` ;
    }
    return(
            <div className='display'>
                <div className='timer'>{formatTime()}
                    <div className='three-buttons'>
                         <button onClick={start} className='start-button'>Start</button>
                         <button onClick={stop} className='stop-button'>Stop</button>
                         <button onClick={reset} className='reset-button'>Reset</button>

                    </div>
                </div>
            </div>
    )
}
export default ComponentC;