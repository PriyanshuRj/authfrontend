import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./style.css";
const API = "localhost:8000/signup";
export default function Login() {
  const [emailValidator,validate] = useState(null);

  const validateEmail = (e) => {
    var email = e.target.value;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
      validate('*Enter valid Email');
    }
    else{
      const len = email.length;
      if(email.substring(len-4,len)==='.com' || email.substring(len-4,len)==='.org' || email.substring(len-4,len)==='.net' || email.substring(len-3,len)==='.in' || email.substring(len-3,len)==='.en' || email.substring(len-2,len)==='.us'){
        var index = email.indexOf('@') + 1;
        console.log(email.substring(index,index+5));
        if(index !== -1 &&(email.substring(index,index+5)==="gmail" || email.substring(index,index+7) === "outlook" || email.substring(index,index+6) === "icloud")){
          validate(null);
        }
        
      }
    }
  }
  const submitform =(e)=>{
    
    console.log("clickee");
    if(emailValidator !==null){
      console.log("error");
      alert("please choose a correct email first");
    }
  }

  return (
    <div>
      <form>
  
  <div className="segment">
    <h1>Log in</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Email Address" onChange={(e) => validateEmail(e)}/>
  </label>
  <p className = "signuperrors">{emailValidator}</p>
  <label>
    <input type="password" placeholder="Password"/>
  </label>
  <p className = "signuperrors"></p>

  <button className="red" type="button" onClick={(e)=>submitform(e)}><i className="icon ion-md-lock"></i> Log in</button>
  
  <div className="segment">
    <p>don't have account </p>
    <button className="unit" type="button"> <Link to="/signup">SignUp</Link></button>

  </div>
</form>
        
        
    </div>
  )
}
