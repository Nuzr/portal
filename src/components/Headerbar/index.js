import React from "react";
import "./index.scss" ;
const Headerbar =()=>{
    return(
        <div className="wrapper">
        <div className="profile-bar">
            <div className="logo-box">
                <div className="logo">
                    <img  src="/images/Group_71icon.svg" alt=""/></div>
                   <div className="iweb">
                    <img src="/images/Groupiweb.svg"/>
                   </div> 
                   <div className="vertical"></div>
                   <div className="emp-box">
                    <div className="text">EMPLOYEE</div>
            </div>
            </div>
            <div className="photo-box">
                <img src="/images/Ellipse 1photo.svg"/>
            </div>
        </div>
        
        </div>
    )
}
export default Headerbar;