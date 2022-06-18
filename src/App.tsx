import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar/navBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
