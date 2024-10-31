import {Link} from 'react-router-dom';
import "./styleHome.css";
function Home(){
    return(
    <div className='boxflex'>
        
            <button><Link to="/Food"><p className='small'>Food</p></Link></button>
            <button><Link to="/Footer"><p className='small'>Footer</p></Link> </button>
            <button><Link to="/Myheader"><p  className="medium">Myheader</p> </Link></button>
            <button><Link to="/Button"><p className='small'>Button</p></Link></button>
            <button><Link to="/Card"><p className='small'>Card</p></Link></button>
            <button><Link to="/ClickEvent"><p  className="medium">ClickEvent</p></Link></button>
            <button><Link to="/ColorPick"><p  className="medium">ColorPick</p></Link></button>
            <button><Link to="/componentA"><p  className="large">ComponentA</p></Link></button>
            <button><Link to="/DigitalClock"><p  className="large">DigitalClock</p></Link></button>
            <button><Link to="/Fruits"><p className='small'>Fruits</p></Link></button>
            <button><Link to="/List"><p className='small'>List</p></Link></button>
            <button><Link to="/MyComponent"><p  className="large">MyComponent</p></Link></button>
            <button><Link to="/OnChange"><p className='medium'>OnChange</p></Link></button>
            <button><Link to="/Planets"><p className='medium'>Planets</p></Link></button>
            <button><Link to="/ToDoList"><p className='medium'>ToDoList</p></Link></button>
            <button><Link to="/Updater"><p className='small'>Updater</p></Link></button>
            <button><Link to="/UseEffect"><p  className="medium">UseEffect</p></Link></button>
            <button><Link to="/UserLogin"><p  className="medium">UserLogin</p></Link></button>
        
    </div>
    )
}
export default Home;