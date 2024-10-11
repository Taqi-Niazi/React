import React, {useState, useEffect} from 'react';
function UseEffect(){
    /*const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    function addCount(){
        setCount(c=> c +1)
    }
    function changeColor(){
        setColor(c=>  c === "green" ? "red" : "green")
    }
    useEffect(()=>{
        document.title = `count : ${count} ${color}`
    },[count,color])*/
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return()=>{
            window.removeEventListener("resize", handleResize);
            console.log("Event listner removed")
        }
    },[]);
    useEffect(()=>{
        document.title = `${height} ${width}`
    },[height, width]);

    function handleResize(){
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    
    

    return(
           <>
           {/*<h1 style={{color:color}}>Count : {count} Color: {color}</h1>
           <button onClick={addCount}>Increment</button>
           <button onClick={changeColor}>Change</button>*/}
           <h1>Height : {height}</h1>
           <h1>Width : {width}</h1>
           </>
           )
}
export default UseEffect;