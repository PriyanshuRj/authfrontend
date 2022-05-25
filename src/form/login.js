import React from 'react'
import {Link} from "react-router-dom";
import "./style.css";
export default function Login() {
  return (
    <div>
      <form>
  
  <div class="segment">
    <h1>Log in</h1>
  </div>
  
  <label>
    <input type="text" placeholder="Email Address"/>
  </label>
  <label>
    <input type="password" placeholder="Password"/>
  </label>
  <button class="red" type="button"><i class="icon ion-md-lock"></i> Log in</button>
  
  <div class="segment">
    <p>don't have account </p>
    <button class="unit" type="button"> <Link to="/signup">SignUp</Link></button>

  </div>
</form>
        
        
    </div>
  )
}
