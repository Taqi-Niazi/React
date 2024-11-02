import React, {useState} from 'react';
function Updater(){
   /* const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(c => c+1);
        setCount(c => c*3);
    }
    const decrement = () =>{
        setCount(c => c-1);
        setCount(c => c/3);
    }
    const reset = () =>{
        setCount(c => c=0);
    }*/

        const [car, setCar] = useState({
            year : 2024, maker : "Ford", model : "Mustang" , color : "black"
        })
        function updateYear(event){
            setCar(c =>({...car , year : event.target.value}) )
             }
        function updateMaker(event){
            setCar(c =>({...car , maker : event.target.value}) )
                 }
        function updateModel(event){
            setCar(c =>({...car , model : event.target.value}) )
                     }
        function updateColor(event){
            setCar(c =>({...car , color : event.target.value}) )
                         }
    return(
        <>
         {/*<h1>{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button>*/}

         <h1>Your favourite car is {car.year} {car.maker} {car.model} <label style={{backgroundColor: car.color, color: 'greenYellow', fontSize:15, padding: 15}}>{car.color}</label></h1>
         <input type="number" value={car.year} onChange={updateYear} /><br/>
         <input type="text" value={car.maker} onChange={updateMaker} /><br/>
         <input type="text" value={car.model} onChange={updateModel} /><br/>
         <input type="text" value={car.color} onChange={updateColor} /><br />
         <input type="color" value={car.color} onChange={updateColor} />
        </>
    )
}

export default Updater;