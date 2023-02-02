import React from "react";
import { useState } from "react";
import "./index.scss";
import  validator from "validator";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
     const[type,settype]= useState("password");
     const [show,setshow]=useState(false);
     const [userdata,setuserdata]=useState({id:"",pass:""})
     const[Isvalid,setIsvalid]=useState(true)
     const[errormsg,seterrormsg]=useState("")
     const[authenticated,setauthenticated]=useState(null)
     const [role,setrole] =useState(null)
     
     const navigate =useNavigate();
     const handleSubmit =(e)=>{
         e.preventDefault()
             handle_validation()
           
         
     }
const handle_validation=()=>{
    if (!validator.isEmail(userdata.id) ||userdata.id==="") {
        setIsvalid(false)
        
      } 
     var pswrdRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/
   if(!pswrdRegex.test(userdata.pass) ||userdata.pass===""){
    seterrormsg("Incorrect password format.")
   }
   
}
 

     const handleIconClick =()=>{
        setshow(!show)
        show? settype("text"):settype("password")
     }
     const handleChange=(e)=>{
        setuserdata({...userdata , 
            [e.target.name]:e.target.value })
           
     }
       return(
        <>        
         <div className="container">
          <div className="sec-left">
            <div className="group">
            <div className="logo">
                <img  src="/images/Group_71icon.svg" alt=""/></div>
               <div className="iweb">
                <img src="/images/Groupiweb.svg"/>
               </div> 
           
    </div>
    <div className="text-box">
        We make products that make people say Wow!
    </div>
            </div>
        <div className="vertical"></div>
        <div className="sec-right">
            <div className="login-input">
               
                <div className="portal">
                    <div className="heading">Portal Login</div>
                    <div className="enter">Please enter your username or work email address
                </div>
                </div>
               <form onSubmit={handleSubmit}>
                <div className="email-id">
                    <input type="text" placeholder="Employee ID or Email" onChange={handleChange} name="id"value={userdata.id}/>
                
                {!Isvalid?<span>Please enter correct email id</span>:null}
                </div>
                <div className="password">
                    <input type={type} placeholder="Password" value={userdata.pass}  name="pass" onChange={handleChange}/>
                    
                    <img onClick ={handleIconClick}src="/images/eye.svg"/>
               
                </div>
                <span>{errormsg}</span>
            
            <div className="login-button">
                <button type="submit" >Login</button>
            </div>
            </form>
           </div>
        </div>
    </div>

 </> 

)
}
export default LoginComponent ;