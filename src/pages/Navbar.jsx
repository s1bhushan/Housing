import React from "react";
import { Route, BrowserRouter as Router,Routes,Link } from "react-router-dom";
import Home from "./Home";
import Housing from "../components/Housing";
import HousingEdge from "../components/HousingEdge";

import Downloadapp from "./Downloadapp";
import Devloper from "./Devloper";
import Broker from "./Broker";
import Login from "./Login";
import Register from "../login/Register";





export default function Navbar(){
    return(
      <Router>

      <header className="headerfile">
             <div className="logo">Housing.com</div>
             <nav>
                 <ul>
                   <li><Link to='/'><button type="button" className="btn btn-outline-light">Pay Rent</button></Link></li>
                     
                     <li><Link to='/download'>Download App</Link></li>
                     <li><Link to='/'>Saved</Link></li>
                    
                     <li className="nav-item dropdown">
                         <Link className="nav-Link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Packages
                         </Link>
                         <ul className="dropdown-menu">
      
                           <li><Link className="dropdown-item" to="/devloper">For Devloper</Link></li>
                           <li><Link className="dropdown-item" to="/broker">For Broker</Link></li>
                           <li><Link className="dropdown-item" to="#">For Owners</Link></li>
                           <li><Link className="dropdown-item" to="#">Housing Premium</Link></li>
                         </ul>
                       </li>
                     <li><Link to="#">Post property</Link></li>
                     <li><Link to="/login">Login</Link></li>
                 </ul>
             </nav>
         </header>
      
                  <Routes>
                      <Route path="/" element = {<Home/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/house" element={<Housing/>}/>
                      <Route path="/edge" element = {<HousingEdge/>}/>
                      <Route path="/download" element={<Downloadapp/>}/>
                      <Route path="/devloper" element={<Devloper/>}/>
                      <Route path="/broker" element={<Broker/>}/>
                      <Route path="/register" element={<Register/>}/>

                  </Routes>
                 
      
      
      
                  </Router>
    )
}