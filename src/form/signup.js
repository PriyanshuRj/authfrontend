import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const qs = require('qs');
const API = "http://localhost:8000/signup";

export default function Signup() {
  const navigate = useNavigate();
  const [emailValidator,validate] = useState(null);
  const [nameValidator,validatename] = useState(null);
  const [passwordValidator,validatepassword] = useState(null);
  const [mobileValidator,validatemobile] = useState(null);
  const [mobile, setmobile] = useState(null);
  const [email,setemail] = useState(null);
  const [uname,setname] = useState(null);
  const [password,setpassword] = useState(null);

  const validateEmail = (e) => {
    var email = e.target.value;
    setemail(email);
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
      validate('*Enter valid Email');
    }
    else{
      const len = email.length;
      if(email.substring(len-4,len)==='.com' || email.substring(len-4,len)==='.org' || email.substring(len-4,len)==='.net' || email.substring(len-3,len)==='.in' || email.substring(len-3,len)==='.en' || email.substring(len-2,len)==='.us'){
        var index = email.indexOf('@') + 1;
        
        if(index !== -1 &&(email.substring(index,index+5)==="gmail" || email.substring(index,index+7) === "outlook" || email.substring(index,index+6) === "icloud")){
          validate(" ");
        }
        
      }
    }
  }
  const validateName = (e) =>{
    var name = e.target.value;
    setname(name);
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
        validatename("* The name can only contain letters");
      }

    }
    if(state===0){
      validatename(" ");
    }
  }
  const validatePassword = (e) =>{
    var password = e.target.value;
    setpassword(password)
    if(password.length>=8){
      validatepassword(" ");
    }
    else{
      validatepassword("* Password must be of atlest length 8");

    }
  }
  const validateMobile = (e) =>{
    var password = e.target.value;
    setmobile(password);
    if(password.length===10){
      validatemobile(" ");
    }
    else{
      validatemobile("* Mobile No. must be of length 10");

    }
  }
  const submitform = async (e)=>{
    e.preventDefault();
    console.log("here");
    
    if(emailValidator !==" "){
      console.log("error");
      alert("please choose a correct email first");
    }
    else if(nameValidator !==" "){
      console.log("error");
      alert("please choose a correct name first");
    }
    else if(passwordValidator !==" "){
      console.log("error");
      alert("please choose a longer password first");
    }
    else if(mobileValidator !==" "){
      console.log("error");
      alert("please choose a 10 digit phone number first");
    }
    
    console.log(email,mobile,password,uname);

    // username,password,mobileno,email
    let headers = new Headers();

  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

    const res = await axios.post(API, qs.stringify({
      username:uname,
      email:email,
      password:password,
      mobileno:mobile
    }),headers).then(
      console.log("hehfkgck")
    );
    console.log(res);
    if(res.data.state===200){
      alert("Email already exists");
    }
    if(res.status===200 && res.data.state !== 200){
      alert("User created");
      navigate("/otp", { state: email});
    }
  
  }
  return (
    <div>
      <form >
  
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
  <label>
    <input type="number" placeholder="Mobile No." onChange={(e) => validateMobile(e)}/>
  </label>
  <p className = "signuperrors">{mobileValidator}</p>
  <button className="red" type="button" onClick={(e)=>submitform(e)}> Sign Up</button>
  
  <div className="segment">
    <p>Already have account </p>
    <button className="unit" type="button"><Link to="/Login">Login</Link></button>

  </div>
</form>
         
        
        
    </div>
  )
}
