import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Menubar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isHamClicked, setIsHamClicked] = useState(false);
  return (
    <nav className="menubar">
      <div className="logo">TIMES Consultant</div>
      <div className="menu-items">
        <Link to={"/"}>Home</Link>
        <a href="">Countries</a>
        <Link
          className="discover"
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
        >
          Discover More
          <FaCaretDown className="inline-block" />
          <DropdownMenu showSubMenu={showSubMenu} />
        </Link>
        <Link to="/test">Events</Link>
        <a href="">Online Consultation</a>
        <a href="">Book Accomodation</a>
        <a href="">Contact Us</a>
      </div>
      {isHamClicked ? (
        <RxCross1
          onClick={() => setIsHamClicked(!isHamClicked)}
          className="hamburger text-[30px]"
        />
      ) : (
        <RxHamburgerMenu
          className="hamburger text-[30px]"
          onClick={() => setIsHamClicked(!isHamClicked)}
        />
      )}
    </nav>
  );
};

export default Menubar;
