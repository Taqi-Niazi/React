import React, {useState} from "react";

function AddRemove(){
    /*const [fruits,setFruits] = useState(["Apple", "Orange", "Banana"]);
    const [otherFruits,setOtherFruits] = useState(["Plum", "Pineapple", "Peach", "Guavava", "Pomegranate"]);

    function addFruits(){
        const add = document.getElementById("inputFruit").value;
        document.getElementById("inputFruit").value ="";
        setFruits(f =>[...fruits, add]);
    };

    function removeFruits(index){
        setFruits(fruits.filter((element, i) => i !== index));
    };
    function removeFruits1(index){
        const fruitToMove = otherFruits[index];
        setOtherFruits(otherFruits.filter((element, i)=> i !== index));
        setFruits( f=>[...f, fruitToMove]);
    };*/

    const [car, setCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [maker, setMaker] = useState('');
    const [model, setModel] = useState('');

    function addCar(){
        const details = {carYear: year ,
                         carMaker: maker ,
                         carModel: model };
        setCar(c=>[...c, details])
        setYear(new Date().getFullYear())
        setMaker('')
        setModel('')
    };
    function removeCar(index){
        setCar(car.filter((element,i) => i !== index))
    };
    function addYear(event){
        setYear(event.target.value)
    };
    function addMaker(event){
        setMaker(event.target.value)
    };
    function addModel(event){
        setModel(event.target.value)
    };


    return(
        <div /*className="makeFlex"*/>
            {/*<div className="flex1">
            <h1>List of Fruits</h1>
            <ul>
                {fruits.map((fruit,index) => <li key={index} onClick={()=> removeFruits(index)}>{fruit}</li>)}
            </ul>
            <input type="text"  id="inputFruit"/>
            <button onClick={addFruits} >Add</button>
            </div>
            <div className="flex2">
            <h1>List of Fruits</h1>
            <ul>
                {otherFruits.map((fruit,index) => <li key={index} onClick={()=> removeFruits1(index)}>{fruit}</li>)}
            </ul>
            </div>*/}
            <h1>List of Cars</h1>
            <ol>
                {car.map((element,index)=> <li key={index}  onClick={()=> removeCar(index)}  > 
                    {element.carYear} {element.carMaker} {element.carModel}</li>)}
            </ol>
            <input type="number" value={year} onChange={addYear}/><br/>
            <input type="text" value={maker} placeholder="enter maker" onChange={addMaker}/><br/>
            <input type="text" value={model} placeholder="enter model"onChange={addModel}/>
            <button onClick={addCar}>Add</button>
            
        </div>
    )
}
export default AddRemove;