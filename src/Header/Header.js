import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container nav-area">
      <div className="row">
        <div className="col">
          <div className="icon">
            <Link to="/">
              <i className="fa-solid fa-book-journal-whills"></i>
            </Link>
          </div>
        </div>
        <div className="col-9">
          <div className="nav-container">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Link to="/blog">Blog</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Statistics">Statistics</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog">Question</Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
