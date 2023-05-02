import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="12">
          <div className="footer_nav">
                    <ul className="footer_menu">
                      <Navbar/>
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
              <p className="footer_desc d-flex justify-content-center"><i className="ri-copyright-line"></i>2023, Developed by Pooya</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </footer>

 
  )
};