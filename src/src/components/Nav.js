import React from "react";
import "./Nav.css";

//Importing Icons
import { AiOutlineMenu } from "react-icons/ai";
import { FaCouch } from "react-icons/fa";
import { BsPerson, BsHandbag } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <ul className="left-nav-container">
        <li>
          <a href="/">
            <AiOutlineMenu className="left-nav__menuIcon" />
          </a>
        </li>
        <li>
          <a className="nav-bar__links" href="/">
            Sofas
          </a>
        </li>
        <li>
          <a className="nav-bar__links" href="/">
            Chairs
          </a>
        </li>
        <li>
          <a className="nav-bar__links" href="/">
            Beds
          </a>
        </li>
      </ul>
      <div className="center-nav-container">
        <a href="/">
          <FaCouch className="couch-logo" />
        </a>
        <span id="title">Furniture</span>
      </div>
      <div className="right-nav-container">
        <a href="/">
          <BsPerson className="text-black"/>
        </a>
        <a href="/">
          <BiHeart className='text-black'/>
        </a>
        <div>
          <a href="/">
            <div className="handbag-icon">
              <BsHandbag className="handbag text-black" />
              <div className="handbag-badge">2</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
