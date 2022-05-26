import React,{useState} from 'react'
import {Link} from "react-router-dom";


import "./style.css";
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
      console.log(email.substring(len-3,len));
      if(email.substring(len-3,len)==='com'){
        console.log("yes");
      }
      validate(null);
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
  <button className="red" type="button"><i className="icon ion-md-lock"></i> Log in</button>
  
  <div className="segment">
    <p>don't have account </p>
    <button className="unit" type="button"> <Link to="/signup">SignUp</Link></button>

  </div>
</form>
        
        
    </div>
  )
}
