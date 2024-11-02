import React, {useRef} from 'react';
function Card(){
    const CardsRef = useRef(null);
    const Cards = document.getElementById(".Cards");
    let isDown = false;
    let startX;
    let scrollLeft;
    Cards.addEventListener('mousedown',  (e)=>{
        isDown = true;
        Cards.classList.add('active');
        startX = e.pageX - Cards.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    Cards.addEventListener('mouseleave' , ()=>{
        isDown = false;
        Cards.classList.remove('active');
    });
    Cards.addEventListener('mouseup', ()=>{
        isDown =false;
        Cards.classList.remove('active');
    });
    Cards.addEventListener('mousemove', (e)=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - Cards.offsetLeft;
        const walk = (x - startX) * 3;
        Cards.scrollLeft = scrollLeft - walk;
    }); 

    return(
        <div>
         <div className="Cards">
            <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
             <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">This is title</h2>
            <p className="card-text">This title belongs to a card in react</p>

             </div>
         </div>           
        
        </div>
        
        
    );
}


export default Card;