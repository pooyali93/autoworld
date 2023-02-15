import React from 'react'
import Banner from '../Banner/Banner'
import '../style/Home.css'
import '../style/Banner.css'

import HeroBanner from '../UI/HeroBanner'

const Home = () => {
  return (
    <Banner title="Home">
      <section className='p-0.hero_section'>
        <HeroBanner/>     
      </section>

    </Banner>
  )
}

export default Home;