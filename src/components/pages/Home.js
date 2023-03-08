import React from 'react'
import Banner from '../layouts/Banner'
import '../style/Home.css'
import '../style/Banner.css'
import { CarItems } from '../UI/CarItems'

import HeroBanner from '../UI/HeroBanner'
import { Col, Container, Row } from 'reactstrap'

const Home = () => {
  return (
    <Banner title="Home">
      <section className='p-0.hero_section'>
        <HeroBanner/>     
      </section>

      <section>
        <Container className='pb-5'>
          <Row>
            <Col lg='12' className='text-center mb-5'>
            </Col>

            <CarItems/>
          </Row>
        </Container>
      </section>

    </Banner>
  )
}

export default Home;