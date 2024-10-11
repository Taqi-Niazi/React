import React, {useState} from 'react';
function ColorPick(){
    const [color, setColor] = useState('#666666');
    function colorSelector(event){
        setColor(event.target.value);
    }
    return(
        <div className="colorContainer">
            <h1 style={{color : color}}>Select a Color</h1>
            <div className='colorBlock' style={{backgroundColor : color}}>
                <p>You selected the color {color}</p>
            </div>
            <input type="color" value={color} onChange={colorSelector} />
        </div>
    )
}
export default ColorPick;