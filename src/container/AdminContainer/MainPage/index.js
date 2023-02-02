import React from "react";
import "./index.scss";
import { Link ,Outlet} from "react-router-dom";
import AllSection from "../AllSection";

const MainPage=()=>{
   
    return(
        <>
        <div className="main-section">
        
                  <div  className="grid-section">
                     <div className="title-bar">
                <div className="heading">Projects</div>
                <div className="fill">Fill this form to create a project</div>
            </div>
            <div className="projects-bar">
                
                   <Link to={"all"}> <div className="all">All</div>
                    
                    </Link>
                <Link to={"ongoingProj"}><div className="ongoings-proj">Ongoing projects</div></Link>
               <Link to={"compProj"}> <div className="comp-proj">Completed projects</div></Link>
                <Link to={"pendProj"}><div className="pend-proj">Pending projects</div></Link>
            </div>
            
            <Outlet/> 
             
        </div>
        </div>
      
        </>
    )
}
export default MainPage;