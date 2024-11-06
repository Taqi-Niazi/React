import React, { useState } from 'react';
import './stylingbtn.css'; // Import your CSS file

function Styling() {
  // State to track whether the CSS style should be applied
  const [isStyled1, setIsStyled1] = useState(false);
  const [isStyled2, setIsStyled2] = useState(false);
  const [isStyled3, setIsStyled3] = useState(false);
  const [isStyled4, setIsStyled4] = useState(false);

  // Function to toggle the style
  const toggleStyle1 = () => {
    setIsStyled1(!isStyled1);
  };
  const toggleStyle2 = () => {
    setIsStyled2(!isStyled2);
  };
  const toggleStyle3 = () => {
    setIsStyled3(!isStyled3);
  };
  const toggleStyle4 = () => {
    setIsStyled4(!isStyled4);
  };

  return (
    <div>
     
      <div className="container">
      <div className="stick"></div>
        <div className="box1">
        {/* Conditionally apply a class based on `isStyled` */}
          <div className={isStyled1 ? 'styledDiv1' : 'normalDiv1'}></div>
      
          {/* Button to toggle the style */}
          <button onClick={toggleStyle1}>
           Move
          </button>
      </div>

      <div className="box2">
        {/* Conditionally apply a class based on `isStyled` */}
          <div className={isStyled2 ? 'styledDiv2' : 'normalDiv2'}>
          </div>
      
          {/* Button to toggle the style */}
          <button onClick={toggleStyle2}>
           Move
          </button>
      </div>

      <div className="box3">
        {/* Conditionally apply a class based on `isStyled` */}
          <div className={isStyled3 ? 'styledDiv3' : 'normalDiv3'}>
          </div>
      
          {/* Button to toggle the style */}
          <button onClick={toggleStyle3}>
           Move
          </button>
      </div>

      <div className="box4">
        {/* Conditionally apply a class based on `isStyled` */}
          <div className={isStyled4 ? 'styledDiv4' : 'normalDiv4'}>
          </div>
      
          {/* Button to toggle the style */}
          <button onClick={toggleStyle4}>
           Move
          </button>
      </div>
    </div>
        
    </div>
  );
}

export default Styling;
