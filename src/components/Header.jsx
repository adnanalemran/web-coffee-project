import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="grid grid-cols-4 gap-4 justify-center items-center p-4">
      <NavLink className="btn" to="/" exact>
        Home
      </NavLink>
      <NavLink className="btn" to="/users">
        Users
      </NavLink>
      <NavLink className="btn" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="btn" to="/signin">
        Sign In
      </NavLink>
    </nav>
  );
};

export default Header;
