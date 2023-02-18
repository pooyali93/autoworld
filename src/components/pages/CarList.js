import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {CarItems} from '../UI/CarItems'
import '../style/CarList.css'

const CarList = () => {
  return (
    <section>
        <Container fluid="lg">
          <Row>
            <Col sm='2' className='sidebar-wrapper mt-4 mb-5 p-0'>
              <h3 className='sidebar_title'>Sidebar</h3>
            </Col>
            <Col xs="10 mt-4">
              <CarItems/>
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default CarList