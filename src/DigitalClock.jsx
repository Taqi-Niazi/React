import React , {useState, useEffect} from 'react';

function DigitalClock(){


    const [time, setTime] = useState(Date());
     useEffect(() => {
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>{
            clearInterval(timer)
        }
     },[])
     function clockFormat(){
        if (!(time instanceof Date)){
            return "";
        }
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
     }

     function padZero(number){
        return (number <10 ? "0" : "") + number;
     }


    return(
        <div className='clock-body'>
          <div className='clock-div'>
                <span className='clock'>{clockFormat()}</span>
          </div>
        </div>
    )
}
export default DigitalClock;