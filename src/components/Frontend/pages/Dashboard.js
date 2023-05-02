import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../../layouts/SideBar'
import Helper from '../../helpers/Helper';

export default function Dashboard() {
  return (
    <Helper  className='container-fluid'>
      <section>
        <Container  className='container-fluid mh-100'>
          <Row>
            <Col sm='2' className='sidebar-wrapper mt-4 mb-5 p-0'>
              <Sidebar />
            </Col>
            <Col xs="10 mt-4">
              main
            </Col>
          </Row>
        </Container>
      </section>
    </Helper>
  )
};