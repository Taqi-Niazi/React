import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import {FaSearch, FaBars} from "react-icons/fa";
import "./Navbar.css";
import myImage from './assets/menu.png'
import SideMenu from "./SideMenu";
import "./toggle.css";

// const Header =()=>{
//     const[searchQuery, setSearchQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()){
//             navigate(`/search/${searchQuery}`);
//         }
//     }
function Navbar(){
    function handleToggle(){
        const sidemenu = document.getElementById('sidemenu');
        if (sidemenu.classList.contains("grid-container")){
            sidemenu.classList.remove("grid-container");
            sidemenu.classList.add("grid-container-hide");
        }
        else{
            sidemenu.classList.remove("grid-container-hide");
            sidemenu.classList.add("grid-container")
        }
    }
    return(
        
        // <header className="header">
        //     <div className="header_logo">
        //         <h1 onClick={()=> navigate('/')}>YouTube</h1>
        //     </div>
        //     <form className="header-search" onSubmit={handleSearch}>
        //         <input type="text" placeholder="Search" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
        //         <button type="submit"><FaSearch/></button>
        //     </form>
        //     <div className="header_menu">
        //         <FaBars onClick={()=>{
            //             /*sidebar toggle*/
            //         }}/>
            //     </div>
            // </header>  
            
            <>
            <div className="head">
                <div className="icon"><img src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png" alt="" /></div>
                <div className="search">
                    <input type="text" />
                    <button><img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" /></button>
                </div>
                <div className="menu">
                    <button className="menu-button" onClick={handleToggle}>
                    <img src={myImage} alt=""/></button>
                   <SideMenu/>

                </div>
                <div>
                </div>
            </div>

            </>
        )  
}
export default Navbar;