import React from "react";

const Navbar = () => {
  return (
    <nav>
      <img
        className="img"
        src="https://www.logodesignteam.com/images/portfolio-images/ecommerce-websites-logo-design/ecommerce-websites-logo-design20.jpg"
      alt="img"/>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
