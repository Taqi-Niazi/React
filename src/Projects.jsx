import {Link} from 'react-router-dom';
import "./styleProjects.css";
import Footer from "./Footer";
function Projects(){
    return(
     <> 
        <div className='boxgrid'>

         <button className='prbutton'><Link to="/Styling"><p className='small'>Styling</p></Link></button>
         <button className='prbutton'><Link to="/Card"><p className='small'>Card</p></Link></button>
         <button className='prbutton'><Link to="/ColorPick"><p  className="medium">ColorPick</p></Link></button>
         <button className='prbutton'><Link to="/componentA"><p  className="large">ComponentA</p></Link></button>
         <button className='prbutton'><Link to="/DigitalClock"><p  className="large">DigitalClock</p></Link></button>
         <button className='prbutton'><Link to="/MyComponent"><p  className="large">MyComponent</p></Link></button>
         <button className='prbutton'><Link to="/OnChange"><p className='small'>Order</p></Link></button>
         <button className='prbutton'><Link to="/ToDoList"><p className='medium'>ToDoList</p></Link></button>
         <button className='prbutton'><Link to="/Updater"><p className='small'>Updater</p></Link></button>
         <button className='prbutton'><Link to="/UseEffect"><p  className="medium">UseEffect</p></Link></button>
    
        </div>
        <Footer/>
     </>
    )
}
export default Projects;