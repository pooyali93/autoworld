import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import './Header.css';
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import Navbar from "./Navbar";
import { useAuth } from '../auth/useAuth';


export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleLogout = () => {
    setDropdownOpen(!dropdownOpen);
    logout();
    navigate('/');
  };

  const handleProfile = () => {
    setDropdownOpen(!dropdownOpen);
    navigate('/bookings');
  };



  return (
    <header className="header pt-5 pb-3">
      <Container fluid="md">
        <Row>
          <Col lg="3" md="4" sm="12" className="d-flex justify-content-center align-items-center">
            <div className="logo">
              <NavLink to="/home">
                <img src="./images/logo.png" alt="logo" />
              </NavLink>
            </div>
          </Col>
          <Col lg="6" md="8" sm="12" className="d-flex justify-content-center align-items-center">
            <Navbar />
          </Col>
          <Col lg="3" md="8" sm="12" className="d-flex justify-content-center align-items-center">
            <div className="header_right d-flex align-items-center justify-content-end gap-4">
              <div className="d-flex align-items-center">
                <NavLink className="nav_list" to="/favorite"><i className="ri-heart-fill"></i></NavLink>
              </div>
              <div className="d-flex align-items-center">
                {currentUser != null ? (
                  <div className="welcome">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        onClick={handleDropdown}
                      >
                        {currentUser.FIRSTNAME} {currentUser.LASTNAME}
                      </button>

                      {
                        dropdownOpen &&
                        <div className="dropdown-menu show">
                          <button className="dropdown-item" onClick={handleProfile}>
                            Dashboard
                          </button>
                          <button className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </button>
                        </div>
                      }
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

