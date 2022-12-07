import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
  <div className="App">
    <Header />
      <div className="mainContainer">
      <Navbar/>
      <Dashboard />
      </div>
  </div>
  )
}

export default App;
