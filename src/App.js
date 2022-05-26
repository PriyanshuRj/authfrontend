import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from "./form/login";
import Signup from "./form/signup";
import Home from "./home";
import Otp from "./form/otp";
import Success from "./success";
function App() {
  return (
    <Router>
           <div className="App">
    
          
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signup' element={< Signup />}></Route>
                 <Route exact path='/otp' element={< Otp />}></Route>
                 <Route exact path='/home' element={< Success />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
