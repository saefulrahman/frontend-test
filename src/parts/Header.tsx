import React from "react";

import BrandIcon from "parts/BrandIcon";
import Navbar from "parts/Navbar";

export default function Header() {
  return (
    <header className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <BrandIcon />
        <Navbar />
      </div>
    </header>
  );
}
