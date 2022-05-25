import React from 'react';
import {Link} from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div className="homediv">
        <button className = "btn btn__primary">
<p>

        <Link to="/signup">SignUp</Link>
</p>
        </button>
        <button className = "btn btn__primary">
<p>

        <Link to="/Login">Login</Link>
</p>
        </button>
              
    </div>
  )
}
