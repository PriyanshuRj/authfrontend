import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = "http://localhost:8000/login";
const qs = require('qs');


export default function Login() {
  const navigate = useNavigate();

  const [emailValidator,validate] = useState(null);
  const [email,setemail] = useState(null);
  const [password,setpassword] = useState(null);
  const setPassword = (e)=>{
    var password = e.target.password;
    setpassword(password);
  }

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
          validate(" ");
        }
        
      }
    }
  }
  const submitform =async (e)=>{
    
    console.log("clickee");
    if(emailValidator !==" "){
      console.log("error");
      alert("please choose a correct email first");
    }
    else{
      let headers = new Headers();

  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

    const res = await axios.post(API, qs.stringify({
  
      email:email,
      password:password,
      
    }),headers).then(
      console.log("hehfkgck")
    );
    console.log(res);
    if(res.data.state===200){
      alert("Email already exists");
    }
    alert(res.data.message);
    if(res.status===200 && res.data.message === "Correct credential"){
      
      navigate("/home", { state: email});
    }
  
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
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e)}/>
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
