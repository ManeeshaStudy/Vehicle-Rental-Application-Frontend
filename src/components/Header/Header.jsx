import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className="header-menu">
        <ul className="header-menu-list">
          {["Home", "Vehicles", "Pricing", "About", "Contact"].map((item) => (
            <li key={item} className="header-menu-item">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <Button
          text="Sign In"
          className="button-base signin"
          onClick={() => alert("Sign In clicked!")}
        />
        <Button
          text="Book Me"
          className="button-base bookme"
          onClick={() => alert("Book Me clicked!")}
        />
      </div>
    </header>
  );
}

export default Header;
