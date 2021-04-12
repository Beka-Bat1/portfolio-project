import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wrapper" id="home">
      <div className="main-info">
        <h1>Hi, I am Beka Batmanashvili. Front End Developer.</h1>
      <Typed 
      className="typed-text" 
      strings={["Front-End Development", "HTML", "CSS", "JavaScript", "React" ]} 
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
