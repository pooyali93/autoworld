import './Layout.css'
import Header from './Header.js'
import Footer from './Footer.js'


export default function Layout(props) {
  return (
    <>
      <Header />
        <div className='home_page'>
          {props.children}
        </div>
      <Footer />
    </>
  )
};
