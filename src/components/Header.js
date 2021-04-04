import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>web developemnt and website promotions</h1>
      <Typed 
      className="typed-text" 
      strings={["HTML, CSS, Javascript, React"]} 
      typeSpeed={40}
      backSpeed={60}
      loop
      />
      <a href="" className="btn-main-offer"> contact me </a>
      </div>
    </div>
  );
};

export default Header;
