import React from "react";
import logo from "./logo.svg";
// fontawsome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" href="#">
            {" "}
            <img className="logo" src={logo} alt="Logo" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#content-section">
                  about me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#certificates">
                  certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
