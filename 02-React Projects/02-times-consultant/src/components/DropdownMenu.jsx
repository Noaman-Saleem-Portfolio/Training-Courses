import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownMenu = ({ showSubMenu }) => {
  return (
    <div
      className={`sub-menu ${showSubMenu ? "subMenuShow" : "subMenuHide"}`}
      //   className={`sub-menu`}
    >
      <Link to="/test">Tink bout Us</Link>
      <a href="">What We Do</a>
      <Link className="innerMenu" to="/test">
        Why Chose Us
      </Link>
      <a href="">Testominal</a>
      <a href="">Blog</a>
    </div>
  );
};

export default DropdownMenu;
