import React, {useState, useRef, useEffect} from "react";

function AddRem(){
    const[heads, setHeads] = useState([]);
    const[heading, setHeading] = useState("");
    const[num, setNum] = useState(0);
    const[color, setColor] = useState('#ffffff')

    function addHead(){
        const header = document.getElementById("input").value
        setHeads(h =>[...h,header]);
        document.getElementById("input").value = "";
    };
    function changer(event){
        setHeading(event.target.value)
    };
    function remove(index){
        setHeads(heads.filter((element,i) => i != index ))
    };
    useEffect(()=>{
        console.log("heading changed")
    },[heads])

    function increment(){
        setNum(prevNum=> prevNum+1);
    }
    function decrement(){
        setNum(prevNum=> prevNum-1);
    }
    function reset(){
        setNum(0);
    ṁ}
    function colorSelector(event){
        const newColor = event.target.value
        setColor(newColor)
    }

    return ( 
        <>
        <ol>
            {heads.map((element, index)=> <li key={index} onClick={()=> remove(index)}>{element}</li>)}
        </ol>
        <h1>{heading}</h1>
        <input type="text" id="input" onChange={changer} />
        <button onClick={addHead}>Add</button>
        <center><div>
            <center><h1>{num}</h1></center>
            <button onClick={increment}>Incrememt</button>
            <button onClick={decrement}>Decrememt</button>
            <button onClick={reset}>Reset</button>
        </div></center>
        <div>
            <div className="box" style={{backgroundColor : color}}></div>
            <input type="color" value={color} onChange={colorSelector} />
        </div>
        
        </>
    )
}
export default AddRem