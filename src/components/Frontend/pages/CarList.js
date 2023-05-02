import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CarItems from '../../UI/CarItems'
import './CarList.css'
import Helper from '../../helpers/Helper'


export default function CarList() {


  return (
    <Helper title="Used Cars">
      <section>
        <Container fluid="lg" className='mb-5'>
          <Row>
          <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mt-5 mb-5">
                <span className=" d-flex align-items-center gap-2">
                <i className="ri-equalizer-line"></i> Filter By
                </span>

                <select className='carlistFilter'>
                  <option>Filter Selection</option>
                  <option value="make">Make</option>
                  <option value="model">Model</option>
                </select>
              </div>
            </Col>
            {
              <CarItems/>

            }
          </Row>
        </Container>
      </section>
    </Helper>
  )
};