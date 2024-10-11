import React, {useState, useRef, useEffect} from 'react';
import ComponentC from './componentC';
function ComponentB(){
    const ref1 = useRef()

    function clicked1(){
        ref1.current.style.backgroundColor = "yellow";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
    }
    const ref2 = useRef()

    function clicked2(){
        ref2.current.style.backgroundColor = "red";
        ref1.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
    }
    const ref3 = useRef()

    function clicked3(){
        ref3.current.style.backgroundColor = "green";
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";
    }
return(
        <div  className='box'>
        <h2>ComponentB</h2>
        <input type="text" ref={ref1} />
        <button onClick={clicked1}>Click</button><br />
        <input type="text" ref={ref2} />
        <button onClick={clicked2}>Click</button><br />
        <input type="text" ref={ref3} />
        <button onClick={clicked3}>Click</button>
        <ComponentC/>
        </div>
    )
}
export default ComponentB;