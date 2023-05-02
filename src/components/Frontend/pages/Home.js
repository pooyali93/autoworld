import React from 'react'
import Banner from '../../layouts/Banner.js'
import './Home.css'
import  CarItems from '../../UI/CarItems.js'
import HeroBanner from '../../UI/HeroBanner'
import { Col, Container, Row } from 'reactstrap'
import Feedbacks from '../../Portal/pages/Feedbacks.js'

export default function Home () {
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

            <Col lg="12">
            <Feedbacks/>
            </Col>
          </Row>
        </Container>
      </section>

    </Banner>
  )
}
