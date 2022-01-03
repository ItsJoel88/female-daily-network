/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import iconMenu from "library/images/icon-menu.png";
import fdLogo from "library/images/fd-logo.png";

function Header() {
  return (
    <header className="main-header">
      <img src={iconMenu} alt="icon-menu" className="img-icon cursor-pointer" />
      <img src={fdLogo} alt="icon-company" className="img-logo" />
      <span className="input-search-wrapper w-half">
        <input
          type="text"
          placeholder="Search products, articles, topics, brands, etc"
          className="input-search w-full"
        />
      </span>
      <button className="btn btn-large">Login/Signup</button>
    </header>
  );
}

export default Header;
