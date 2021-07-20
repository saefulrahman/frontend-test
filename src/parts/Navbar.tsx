import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/about">
            About Us
          </a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a className="nav-link" href="/career">
            Career
          </a>
        </li>
        <li>
          <a className="nav-link" href="/contact-us">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
