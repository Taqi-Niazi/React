import React, {useState} from 'react';

function OnChange(){
    const [name, setName] = useState('Guest');
    function guest(event){
        setName(event.target.value);
    }
    const [quantity, setQuantity] = useState('1');
    function quant(event){
        setQuantity(event.target.value);
    }

    const [text, setText] = useState('');
    function comment(event){
        setText(event.target.value);
    }

    const [payment, setPayment] = useState('');
    function pay(event){
        setPayment(event.target.value);
    }

    const [receive, setReceive ] = useState('');
    function location(event){
        setReceive(event.target.value);
    }
    const [wet, setWet] = useState('');
    function gel(event){
        setWet(event.target.value)
    }

    return(
     <>
        <h1>My Cart</h1> 
        <input value={name} onChange={guest} type="text" />
        <p>Name : {name}</p>
        <input value={quantity} onChange={quant} type="number" />
        <p>Quantity : {quantity}</p>
        <textarea value={text} onChange={comment}/>
        <p>Comment : {text}</p>
        <select value={payment} onChange={pay}>
            <option value="">Payment Option</option>
            <option >Online</option>
            <option >COD</option>
            <option >Gift Card</option>
        </select>
        <p> Payment Type: {payment}</p>

        <label >
            <input type="radio" value="Pick up"
            checked={receive ==='Pick up'}
            onChange={location}/>
            Pick up
        </label>
        <label >
            <input type="radio" value="Home Delivery"
            checked={receive ==='Home Delivery'}
            onChange={location}/>
            Home Delivery
        </label>

        <p>Delivery type : {receive}</p>

        <input type="password" value={wet} onChange={gel}/>
        <p>password : {wet}</p>
     </>
    )
}
export default OnChange;