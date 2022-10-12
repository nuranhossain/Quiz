import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <div className="icon">
            <p>sss</p>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="nav-container">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Link to="/blog">Blog</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog">Blog</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/blog">Blog</Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
