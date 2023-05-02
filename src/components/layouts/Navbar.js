import { NavLink } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  // Initialisation ---------
  // Properties ---------
  //  Hooks ---------
  // Contect ---------
  // Methods ---------
  // View ---------
  return (

    <div className="main_nav">
      <div className="nav_wrapper d-flex align-items-center justify-content-start">
        <span className="mobile_nav"><i className="ri-menu-line"></i></span>
        <div className="nav">
          <ul className="menu">
            <NavLink className="nav_list" to="/home" >Home</NavLink>
            <NavLink className="nav_list" to="/carlist" >Used Cars</NavLink>
            <NavLink className="nav_list" to="/about">About</NavLink>
            <NavLink  className="nav_list" to="/contact">Contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )

}