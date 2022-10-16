import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import LandingPage  from "./LandingPage";
import CreditList from "./CreditList"

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
        </Routes>
      </div>
    </Router>
  );
}


