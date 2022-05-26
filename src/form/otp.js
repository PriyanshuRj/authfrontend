import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
const qs = require('qs');
const API = "http://localhost:8000/otpverify";
const API2 = "http://localhost:8000/requestotp";


export default function Otp() {
  const navigate = useNavigate();

    const [validotp,validateotp] = useState(null);
    const { state } = useLocation();
    const [otp,setotp] = useState(null);
    const submitform =async (e)=>{
    
        console.log("clickee");
        if(validotp !==" "){
            console.log("error");
            alert("inncorect OTP");
          }
        else{
          console.log("email :: ",state);
          let headers = new Headers();
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
        
          headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
          headers.append('Access-Control-Allow-Credentials', 'true');
        
          headers.append('GET', 'POST', 'OPTIONS');
        
            const res = await axios.post(API, qs.stringify({
              email:state,
              otp:otp,
            }),headers).then(
              console.log("hehfkgck")
            );
            alert(res.data.message);
            if(res.data.message==="OTP is correct !!"){
              navigate("/login", {replace : true});
            }
        }
        
      }

      const validateOtp = (e) =>{
        var otp = e.target.value;
        setotp(otp);
        if(otp.length===6){
          validateotp(" ");
        }
        else{
          validateotp("* OTP must be of length 6");
    
        }
      }
      const resendotp = async (e) =>{
        console.log("clicked");
        let headers = new Headers();
          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
        
          headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
          headers.append('Access-Control-Allow-Credentials', 'true');
        
          headers.append('GET', 'POST', 'OPTIONS');
        
            const res = await axios.post(API2, qs.stringify({
              email:state,
            }),headers).then(
              );
              console.log(res);
              alert(res.data.message);
        }
      
  return (
    <div>
    <form>

<div className="segment">
  <h1>Verify OTP</h1>
</div>


<label>
  <input type="number" placeholder="OTP" onChange={(e) => validateOtp(e)}/>
</label>

<p className = "signuperrors">{validotp}</p>

<button className="red" type="button" onClick={(e)=>submitform(e)}><i className="icon ion-md-lock"></i>Submit</button>

</form>
<div style={{width:"100vw",display: "flex",justifyContent: "center"}}>

<button className="unit" type="button" style={{ margin:'50px' }} onClick={(e)=>resendotp(e)}>Resend OTP</button>
<div></div>
</div>
      
  </div>
  )
}
