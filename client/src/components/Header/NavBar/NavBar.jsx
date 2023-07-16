import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <nav>
    <Link to={'/'}>
      <img src="/assets/lodeur_logo.png" alt="logo-img" />
    </Link>
  </nav>;
};

export default NavBar;
