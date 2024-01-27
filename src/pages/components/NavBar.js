import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import NASA_logo from '../../img/NASA_logo.png';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link to="/" className="navbar-brand">
        <img src={NASA_logo} alt="NASA Logo" className="Logo_Nasa" width="120" height="90" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <nav className="navbar-nav mx-auto">
          <Link to="/" className="nav-item nav-link text-white">Home</Link>
          <Link to="/AnyPhoto" className="nav-item nav-link text-white" >
            Picture of the Day
          </Link>
          <Link to="/thesolarsysteme" className="nav-item nav-link text-white" >
            The Solare Systeme
          </Link>
        </nav>
      </div>
    </nav>
  );
}
