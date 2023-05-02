import React, { useState } from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import Navbar from "./Navbar";
import { useAuth } from '../auth/useAuth';


export default function Header() {
  const { currentUser, logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(dropdownOpen);
  }

  const handleLogout = () => {
    logout();
  };



  return (
    <header className="header pt-5 pb-3">
      <Container>
        <Row>
          <Col lg="3" md="3" sm="4">
            <div className="logo">
              <NavLink to="/home">
                <img src="./images/logo.png" alt="logo" />
              </NavLink>
            </div>
          </Col>
          <Col lg="6" md="3" sm="4">
            <Navbar />
          </Col>
          <Col lg="3" md="3" sm="4">
            <div className="header_right d-flex align-items-center justify-content-end gap-4">
              <div className="d-flex align-items-center">
                <NavLink className="nav_list" to="/favorite"><i className="ri-heart-fill"></i></NavLink>
              </div>
              <div className="d-flex align-items-center">
                {currentUser != null ? (
                  <div className="welcome">
                    <div className="dropdown">
                      <button
                        className="profile-button"
                        type="button"
                        onClick={handleToggleDropdown}
                      >
                        {currentUser.FIRSTNAME} {currentUser.LASTNAME}
                      </button>

                      {!dropdownOpen &&
                        <div className="logout-dropdown">
                          <button className="logout-button" onClick={handleToggleDropdown}>
                            Logout
                          </button>
                        </div>}
                      {/* <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button> */}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink className="nav_list" to="/login">
                    <i className="ri-user-fill"></i>
                  </NavLink>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

