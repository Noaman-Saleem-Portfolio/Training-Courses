import React from "react";

const Menubar = () => {
  return (
    <nav className="menubar">
      <div className="logo">TIMES Consultant</div>
      <div className="menu-items">
        <a href="">Home</a>
        <a href="">Countries</a>
        <a className="discover" href="">
          Discover More
        </a>
        <a href="">Events</a>
        <a href="">Online Consultation</a>
        <a href="">Book Accomodation</a>
        <a href="">Contact Us</a>
      </div>
    </nav>
  );
};

export default Menubar;
