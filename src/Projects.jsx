import {Link} from 'react-router-dom';
import "./styleProjects.css";
import Footer from "./Footer";
function Projects(){
    return(
     <> 
        <div className='boxgrid'>

         <button className='prbutton'><Link to="/ColorPick"><p  className="medium">ColorPick</p></Link></button>
         <button className='prbutton'><Link to="/DigitalClock"><p  className="large">DigitalClock</p></Link></button>
         <button className='prbutton'><Link to="/Flower"><p className='small'>Flower</p></Link></button>
         <button className='prbutton'><Link to="/Incdecr"><p  className="medium">Incdecr</p></Link></button>
         <button className='prbutton'><Link to="/OnChange"><p className='small'>Order</p></Link></button>
         <button className='prbutton'><Link to="/StopWatch"><p  className="large">StopWatch</p></Link></button>
         <button className='prbutton'><Link to="/ToDoList"><p className='medium'>ToDoList</p></Link></button>
         <button className='prbutton'><Link to="/Updater"><p className='small'>Updater</p></Link></button>
         <button className='prbutton'><Link to="/UseEffect"><p  className="medium">UseEffect</p></Link></button>
    
        </div>
        <Footer/>
     </>
    )
}
export default Projects;