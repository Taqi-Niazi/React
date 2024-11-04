import {Link} from 'react-router-dom';
import "./styleProjects.css";
function Projects(){
    return(
     <> 
        <div className='boxflex'>
        
         <button className='prbutton'><Link to="/Food"><p className='small'>Food</p></Link></button>
         <button className='prbutton'><Link to="/Footer"><p className='small'>Footer</p></Link> </button>
         <button className='prbutton'><Link to="/Myheader"><p  className="medium">Myheader</p> </Link></button>
         <button className='prbutton'><Link to="/Button"><p className='small'>Button</p></Link></button>
         <button className='prbutton'><Link to="/Card"><p className='small'>Card</p></Link></button>
         <button className='prbutton'><Link to="/ClickEvent"><p  className="medium">ClickEvent</p></Link></button>
         <button className='prbutton'><Link to="/ColorPick"><p  className="medium">ColorPick</p></Link></button>
         <button className='prbutton'><Link to="/componentA"><p  className="large">ComponentA</p></Link></button>
         <button className='prbutton'><Link to="/DigitalClock"><p  className="large">DigitalClock</p></Link></button>
         <button className='prbutton'><Link to="/Fruits"><p className='small'>Fruits</p></Link></button>
         <button className='prbutton'><Link to="/List"><p className='small'>List</p></Link></button>
         <button className='prbutton'><Link to="/MyComponent"><p  className="large">MyComponent</p></Link></button>
         <button className='prbutton'><Link to="/OnChange"><p className='medium'>OnChange</p></Link></button>
         <button className='prbutton'><Link to="/Planets"><p className='medium'>Planets</p></Link></button>
         <button className='prbutton'><Link to="/ToDoList"><p className='medium'>ToDoList</p></Link></button>
         <button className='prbutton'><Link to="/Updater"><p className='small'>Updater</p></Link></button>
         <button className='prbutton'><Link to="/UseEffect"><p  className="medium">UseEffect</p></Link></button>
         <button className='prbutton'><Link to="/UserLogin"><p  className="medium">UserLogin</p></Link></button>
    
        </div>
     </>
    )
}
export default Projects;