import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Menubar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isHamClicked, setIsHamClicked] = useState(false);
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <>
      <nav className={`menubar`}>
        <div className="logo">TIMES Consultant</div>
        <div className={`menu-items ${slideMenu ? "slideMenu" : ""}`}>
          <Link to={"/"}>Home</Link>
          <Link href="">Countries</Link>
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
          <Link href="">Online Consultation</Link>
          <Link href="">Book Accomodation</Link>
          <Link href="">Contact Us</Link>
        </div>
        {isHamClicked ? (
          <RxCross1
            onClick={() => {
              setIsHamClicked(!isHamClicked);
              setSlideMenu(!slideMenu);
            }}
            className="hamburger text-[30px]"
          />
        ) : (
          <RxHamburgerMenu
            className="hamburger text-[30px]"
            onClick={() => {
              setIsHamClicked(!isHamClicked);
              setSlideMenu(!slideMenu);
            }}
          />
        )}
      </nav>
      {slideMenu && (
        <span
          className="bg-black opacity-[0.6] w-[100%] left-0 h-[100%] absolute z-[10] "
          onClick={() => {
            setSlideMenu(false);
            setIsHamClicked(false);
          }}
        ></span>
      )}
    </>
  );
};

export default Menubar;
