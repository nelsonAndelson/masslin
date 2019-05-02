import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import logo from "../logo/onlinelogomaker-040219-1441-0402.png";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ height: 50 }} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="humburger"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" href="/" to="/">
              Home
            </Link>

            <Link className="nav-link" href="/services" to="/services">
              Services
            </Link>

            <Link className="nav-link" href="/about" to="/about">
              About
            </Link>

            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <Link to="/exterior" href="/exterior" className="dropdown-item">
                Exterior
              </Link>
              <Link to="/interior" href="/interior" className="dropdown-item">
                Interior
              </Link>
            </NavDropdown>
            <Link className="nav-link" href="/projects" to="/projects">
              Projects
            </Link>
          </Nav>

          <Nav>
            <Nav.Link>
              Cart <Icon name="shopping cart" /> <Badge>2</Badge>
            </Nav.Link>

            <Nav.Link>
              Sign up <Icon name="sign-in" />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style type="text/css">{`
      
    .humburger {
      border-radius: 50% !important;
      height: 35px;
      width: 35px;
      border: 1px solid #fff !important;
      background: none !important;
    }
    .humburger:focus {
      outline: none;
    }
    .humburger span {
      margin-left: -8px !important;
      height: 1.2em;import Services from './../components/Services/Services';

    }
    .custom-a {
      color: red;
    }
      `}</style>
    </>
  );
};

export default NavBar;
