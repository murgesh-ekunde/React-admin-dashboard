import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom'
import Chartpage from './Pages/Charts/Chartpage'
import Cardpage from "./Pages/Cards/Cardpage";
import Buttonpage from "./Pages/Buttons/Buttonpage";
import Tablepage from "./Pages/Tables/Tablepage";


function App() {
  return (
  <div className="App">
    <Header />
      <div className="mainContainer">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/preview/dashboard" element={<Dashboard/>} />
            <Route path="/preview/table" element={<Tablepage />} />
            <Route path="/preview/charts" element={<Chartpage/>} />
            <Route path="/preview/cards" element={<Cardpage/>} />
            <Route path="/preview/buttons" element={<Buttonpage/>} />
        </Routes>
      </div>
  </div>
  )
}

export default App;
