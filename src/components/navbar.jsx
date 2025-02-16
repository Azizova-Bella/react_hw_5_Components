import React from "react";
import logo from "../assets/Logo (1).png";
import device from "../assets/device.png";


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="uls">
        <img src={logo} alt="" />
        <ul>ABOUT</ul>
        <ul> GALLERY </ul>
        <ul>PRISING</ul>
        <ul>FAQ</ul>
        <ul>BENEFITS</ul>
        <div className="btns">
          <button className="in">SING IN</button>
          <button className="up">SING UP</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
