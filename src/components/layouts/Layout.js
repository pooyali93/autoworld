import React, { Fragment } from 'react'
import '../style/Layout.css'
import Header from './Header'
import Footer from './Footer'
import Routers from '../routers/Routers'


const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className='home_page'>
        <Routers />
      </div>
      <Footer />
    </Fragment>
    
  )
}

export default Layout;