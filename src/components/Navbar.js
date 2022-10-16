import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./Home"
import LandingPage  from "./LandingPage";
import CreditList from "./CreditList"
import Validator from "./Validator";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/landing">Landing</Link>
            </li>
            <li>
              <Link to="/creditlist">creditList</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/landing" element = {<LandingPage/>}/>
          <Route path="/creditlist" element = {<CreditList/>}/>
          <Route path="/details" element = {<Outlet/>}>
            <Route path=":address" element = {<Validator/>}/>
          </Route>

          {/* <Route path={["/creditlist", "/creditlist/validator"]} element = {<CreditList/>}/> */}


          
        </Routes>
      </div>
    </Router>
  );
}


