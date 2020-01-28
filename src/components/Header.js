import React from "react"
import logo from "../img/logo.png"
import { Link } from "gatsby"
import TelephoneLink from "../components/TelephoneLink"


const Header = () => {
  return (
    <header className="header-area">

      <div className="container">
        <div className="header-wrap">
          <div className="header-top d-flex justify-content-between align-items-center ">
            <div className="col menu-left">
              <Link to="/">Home</Link>
              <Link to="/menu/">Menu</Link>
              <Link to="/contact/">Contact</Link>


            </div>
            <div className="col-3 logo">
              <Link to="/"><img className="mx-auto" src={logo} alt="logo" /></Link>
            </div>
            <div className="col menu-right justify-self-end">


              <TelephoneLink />

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header