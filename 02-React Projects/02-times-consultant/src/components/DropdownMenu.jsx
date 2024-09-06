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
      <Link href="">What We Do</Link>
      <Link className="innerMenu" to="/test">
        Why Chose Us
      </Link>
      <Link href="">Testominal</Link>
      <Link href="">Blog</Link>
    </div>
  );
};

export default DropdownMenu;
