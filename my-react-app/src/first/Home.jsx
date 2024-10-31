import {Link} from 'react-router-dom';

function Home(){
    return(
    <div>
        <ul>
            <li><Link to="/Food">Food</Link></li>
            <li><Link to="/Footer">Footer</Link></li>
            <li><Link to="/Myheader">Myheader</Link></li>
            <li><Link to="/Button">Button</Link></li>
            <li><Link to="/Card">Card</Link></li>
            <li><Link to="/ClickEvent">ClickEvent</Link></li>
            <li><Link to="/ColorPick">ColorPick</Link></li>
            <li><Link to="/componentA">ComponentA</Link></li>
            <li><Link to="/DigitalClock">DigitalClock</Link></li>
            <li><Link to="/Fruits">Fruits</Link></li>
            <li><Link to="/List">List</Link></li>
            <li><Link to="/MyComponent">MyComponent</Link></li>
            <li><Link to="/OnChange">OnChange</Link></li>
            <li><Link to="/Planets">Planets</Link></li>
            <li><Link to="/ToDoList">ToDoList</Link></li>
            <li><Link to="/Updater">Updater</Link></li>
            <li><Link to="/UseEffect">UseEffect</Link></li>
            <li><Link to="/UserLogin">UserLogin</Link></li>
        </ul>     
    </div>
    )
}
export default Home;