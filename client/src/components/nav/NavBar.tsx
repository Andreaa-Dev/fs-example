import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      NavBar
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/register">user</Link>
        <br />
        <Link to="/cart">cart</Link>
        <br />
        <Link to="/order">order</Link>
      </div>
    </div>
  );
}
