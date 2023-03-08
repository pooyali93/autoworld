import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../style/Footer.css';
import { navigation } from "../data/Data";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="12">
          <div className="footer_nav">
                    <ul className="footer_menu">
                      {navigation.map((list, index) => (
                        <NavLink
                          to={list.path}
                          key={index}
                          className={(navClass) =>
                            navClass.isActive
                              ? "footer_nav_active footer_nav_list"
                              : "footer_nav_list"
                          }
                        >
                          {list.text}
                        </NavLink>
                      ))}
                    </ul>
                  </div>
          </Col>

          <Col lg="6" md="4" sm="6">
            <div className="footer_social">
            <div className="footer_right d-flex align-items-center justify-content-end gap-2">
                <Link to="#" className="d-flex align-items-center">
                <i className="ri-facebook-fill"></i>
                </Link>

                <Link to="#" className="d-flex align-items-center">
                <i className="ri-twitter-fill"></i>
                </Link>

                <Link to="#" className="d-flex align-items-center">
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>
          </Col>

          
        </Row>

        
      </Container>
      </div>
         <div className="footer_copyright ">
      <Container>
      <Row>
        <Col lg="12">
            <div className="footer_bottom ">
              <p className="footer_desc d-flex justify-content-center"><i class="ri-copyright-line"></i>2023, Developed by Pooya</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </footer>

 
  )
}

export default Footer