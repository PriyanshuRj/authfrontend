import React,{useState} from 'react'
import {Link} from "react-router-dom";
import validator from 'validator';
import "./style.css";
export default function Signup() {
  const [emailValidator,validate] = useState(null);
  const [nameValidator,validatename] = useState(null);
  const [passwordValidator,validatepassword] = useState(null);
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      validate(null);
    } else {
      validate('*Enter valid Email')
    }
  }
  const validateName = (e) =>{
    var name = e.target.value;
    let state = 0;
    for(let i = 0;i<name.length;i++){
      if(name.charCodeAt(i)>=65 && name.charCodeAt(i)<=90){
        continue;
      }
      if(name.charCodeAt(i)>=97 && name.charCodeAt(i)<=122){
        continue;
      }
      else{
        state = 1;
        validatename("*The name can only contain letters");
      }

    }
    if(state===0){
      validatename(" ");
    }
  }
  const validatePassword = (e) =>{
    var password = e.target.value;
    if(password.length>=8){
      validatepassword("");
    }
    else{
      validatepassword("* Password must be of atlest length 8");

    }
  }
  return (
    <div>
      <form>
  
  <div className="segment">
    <h1>Sign up</h1>
  </div>
  <label>
    <input type="text" placeholder="Full Name" onChange={(e) => validateName(e)}/>
  </label>
  <p className = "signuperrors">{nameValidator}</p>
  <label>
    <input type="text" placeholder="Email Address" onChange={(e) => validateEmail(e)}/>
  </label>
  <p className = "signuperrors">{emailValidator}</p>
  <label>
    <input type="password" placeholder="Password" onChange={(e) => validatePassword(e)}/>
  </label>
  <p className = "signuperrors">{passwordValidator}</p>
  <button className="red" type="button"><i className="icon ion-md-lock"></i> Sign Up</button>
  
  <div className="segment">
    <p>Already have account </p>
    <button className="unit" type="button"><Link to="/Login">Login</Link></button>

  </div>
</form>
         
        
        
    </div>
  )
}
