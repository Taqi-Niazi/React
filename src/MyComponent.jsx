 import React ,{useState} from 'react';

 function MyComponent (){
    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(num +1);
        if(num>9){
            setNum(num + 10)
        }
    }
    const decrement = () => {
        setNum(num - 1);
        if(num<-9){
            setNum(num - 10)
        }
    };
    const reset = () => {
        setNum(0);
    }

    const [name, setName] = useState();
    const naming = () =>{
        setName('Taqi');
        if(name=='Taqi'){
            setName(null);
        }
    }
    return(
        <div className='mycomp'>
         <h2>{num}</h2>
         <button className='btn' onClick={decrement}>Decrement</button>
         <button className='btn' onClick={reset}>Reset</button>
         <button className='btn' onClick={increment}>Increment</button>
         <br />
         <button className='togBtn' onClick={naming}>Created By~</button>
         <h1>{name}</h1>

        </div>
    );
 };
 export default MyComponent;