import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={"layout"}>
      <header className={"headerContainer"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </header>
      <Outlet />
      <footer>2023</footer>
    </div>
  );
};

export default Layout;
