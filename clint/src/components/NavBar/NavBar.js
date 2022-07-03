import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/order">Orders</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
