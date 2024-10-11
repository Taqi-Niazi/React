import Navbar from "./Navbar";
import React, {useState} from "react";
import image1 from "./assets/account.png"
import image2 from "./assets/settings.png"
import image3 from "./assets/history.png"
import image4 from "./assets/help.png"


function SideMenu(){
    return(
        <div className="grid-container" id="sidemenu">
            <div className="grid1">
                <img src={image1} alt="" />
                <button>Account</button>
            </div>
            <div className="grid2">
                <img src={image2} alt="" />  
                <button>Settings</button>
            </div>
            <div className="grid3">
                <img src={image3} alt="" />
                <button>History</button>
            </div>
            <div className="grid4">
                <img src={image4} alt="" />
                <button>Help</button>
            </div>
        </div>
    )
}
export default SideMenu;