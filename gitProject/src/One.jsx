import React, {useState, useEffect} from "react";
function One(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('#666666')
    function increment(){
        setCount(count + 1)        
    }
    function colorChange(event){
        setColor(event.target.value)
    }
    return(
        <>
        <h1>Hello React</h1>
        <h2>{count}</h2>
        <button onClick={increment} style={{backgroundColor: color}}>click</button>
        <input type="color" value={color} onChange={colorChange}/>
        </>
    )
}
export default One;