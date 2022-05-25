import React from 'react'
import {Link} from "react-router-dom";
import "./style.css";
export default function Signup() {
  return (
    <div>
      <form>
  
  <div class="segment">
    <h1>Sign up</h1>
  </div>
  <label>
    <input type="text" placeholder="Full Name"/>
  </label>
  <label>
    <input type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input type="password" placeholder="Password"/>
  </label>
  <button class="red" type="button"><i class="icon ion-md-lock"></i> Sign Up</button>
  
  <div class="segment">
    <p>Already have account </p>
    <button class="unit" type="button"><Link to="/Login">Login</Link></button>

  </div>
</form>
         
        
        
    </div>
  )
}
