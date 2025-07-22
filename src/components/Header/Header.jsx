import React from "react";
import "./Header.css";
import Button from "../Button/Button";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="menu">
        <nav>
          <li className="menu-item">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#vehicles">Vehicles</a>
          </li>
          <li className="menu-item">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </div>
      <div className="button">
        <Button
          text="Sign In"
          className="signin"
          onClick={() => alert("Clicked!")}
        />
        <Button
          text="Book Me"
          className="bookme"
          onClick={() => alert("Clicked!")}
        />
      </div>
    </div>
  );
}

export default Header;
