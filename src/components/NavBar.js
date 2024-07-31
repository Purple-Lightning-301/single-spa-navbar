import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", gap: "10px", background: "#F5A21D", padding: "10px 20px" }}>
        <Link
          to="/"
          className="link"
          style={{ color: "#FFF", textDecoration: "none", fontSize: "21px" }}
        >
          Home
        </Link>
        <Link
          to="/chart"
          className="link"
          style={{ color: "#FFF", textDecoration: "none", fontSize: "21px" }}
        >
          Chart
        </Link>
        <Link
          to="/QNA"
          className="link"
          style={{ color: "#FFF", textDecoration: "none", fontSize: "21px" }}
        >
          QNA
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
