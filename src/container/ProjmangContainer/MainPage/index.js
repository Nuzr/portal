import React from "react";
import "./index.scss"

const MainPage=()=>{

    return( 
    <div class="main-section">
    <div class="head-bar">
    <div class="greeting-box">
        <div class="header">Hi, Kamal Gupta</div>
        <div class="about">Here’s all you project details</div>
    </div>
 <div class="create-proj">
    <div class="text">Create New Project
    <div class="add"><img src="./images/add.svg" alt=""/></div> 
    </div>
</div>
    </div>
    <div class="project-bar">
        <div class="proj-assign">
            <div class="title">
                <div class="proj-status">Projects Assigned </div>
                <div class="detail">Total Numbers of projects assigned till now</div>
            </div>
            <div class="proj-num">20</div>

        </div>
        <div class="proj-comp">
            <div class="title">
                <div class="proj-status">Projects Completed </div>
                <div class="detail">Total Numbers of projects assigned till now</div>
            </div>
            <div class="proj-num">20</div>
        </div>
        <div class="proj-pend">
            <div class="title">
                <div class="proj-status">Projects Pending </div>
                <div class="detail">Total Numbers of projects assigned till now</div>
            </div>
            <div class="proj-num">0</div>
        </div>
    </div>
    <div class="ongoing-proj">Projects Ongoing</div>
   <div class="blocks">
     <div class="proj-block">
        <div class="upper-sec">Impulsive web with a big project name</div>
        <div class="lower-sec">
            <div class="moderate">
                <img src="/images/Ellipse 2.svg"/>
                <div class="text">MODRATE</div>
            </div>
            <div class="ongoing"> 
                 <img src="/images/Ellipse 2purple.svg"/>
                <div class="text">ONGOING</div>
            </div>
            <div class="date-box">
                <img src="/images/flag.svg" alt=""/>
                <div class="date">12/04/2022</div>
                <div class="profile"><img src="/images/profile.svg"/></div>
            </div>
        </div>
     </div>
    <div class="proj-block">
        <div class="upper-sec">Impulsive web with a big project name</div>
    <div class="lower-sec">
        <div class="moderate">
            <img src="/images/Ellipse 2.svg"/>
            <div class="text">MODRATE</div>
        </div>
        <div class="ongoing"> 
             <img src="/images/Ellipse 2purple.svg"/>
            <div class="text">ONGOING</div>
        </div>
        <div class="date-box">
            <img src="/images/flag.svg" alt=""/>
            <div class="date">12/04/2022</div>
            <div class="profile"><img src="/images/profile.svg"/></div>
        </div>
    </div>
</div>
    <div class="proj-block">
        <div class="upper-sec">Impulsive web with a big project name</div>
    <div class="lower-sec">
        <div class="moderate">
            <img src="/images/Ellipse 2.svg"/>
            <div class="text">MODRATE</div>
        </div>
        <div class="ongoing"> 
             <img src="/images//Ellipse 2purple.svg"/>
            <div class="text">ONGOING</div>
        </div>
        <div class="date-box">
            <img src="/images//flag.svg" alt=""/>
            <div class="date">12/04/2022</div>
            <div class="profile"><img src="/images//profile.svg"/></div>
        </div>
    </div>
    </div>
   </div>
    </div> )
}
export default MainPage;