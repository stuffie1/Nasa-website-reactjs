import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "../App.css";
import AnyPhoto from "../pages/PictureOfDay/PictureOfDay";
import SolareSysteme from "../pages/SolareSysteme/SolareSysteme";
import Earth from "../pages/SolareSysteme/Earth";
import Sun from "../pages/SolareSysteme/Sun";
import Uranus from "../pages/SolareSysteme/Uranus";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
          <Route path="/" element={<HomePage/>}  exact />
          <Route path="/AnyPhoto" element={<AnyPhoto/>}  />
          <Route path="/thesolarsysteme" element={<SolareSysteme/>}  >
          <Route index element={<Sun />} />
            <Route path="sun" element={<Sun/>} />
            <Route path="earth" element={<Earth/>} />
            <Route path="uranus" element={<Uranus/>} />
          </Route>
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
