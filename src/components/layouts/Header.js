import React from "react";
import '../style/Header.css';
import { navigation } from "../data/Data";
import { Link, NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";


const Header = () => {
  return (
    <>
      <header className="header pt-5 pb-3">
        <Container>
          <Row>
            <Col lg="3" md="3" sm="4">
              <div className="logo">
                <a>
                  <Link to="/home">
                    <img src="./images/logo.png" />
                  </Link>
                </a>
              </div>
            </Col>
            <Col lg="6" md="3" sm="4">
              <div className="main_nav">
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                  <span className="mobile_nav">
                    <i class="ri-menu-line"></i>
                  </span>
                  <div className="nav">
                    <ul className="menu">
                      {navigation.map((list, index) => (
                        <NavLink
                          to={list.path}
                          key={index}
                          className={(navClass) =>
                            navClass.isActive
                              ? "nav_active nav_list"
                              : "nav_list"
                          }
                        >
                          {list.text}
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_right d-flex align-items-center justify-content-end gap-4">
                <Link to="#" className="d-flex align-items-center">
                  <i class="ri-heart-fill"></i>
                </Link>

                <Link to="#" className="d-flex align-items-center">
                  <i class="ri-user-fill"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
