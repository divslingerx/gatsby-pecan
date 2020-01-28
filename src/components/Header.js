import React from "react"


const Header = ({ logo }) => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-wrap">
          <div className="header-top d-flex justify-content-between align-items-center navbar-expand-md">
            <div className="col menu-left">
              <a className="active" href="index.html">Home</a>
              <a href="#menu">menu</a>

            </div>
            <div className="col-3 logo">
              <a href="#header"><img className="mx-auto" src={logo} alt="logo" /></a>
            </div>
            <nav className="col navbar navbar-expand-md justify-content-end">


              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#collapsibleNavbar">
                <span className="lnr lnr-menu"></span>
              </button>


              <div className="collapse navbar-collapse menu-right" id="collapsibleNavbar">
                {/* <ul className="navbar-nav justify-content-center w-100">
                  <li className="nav-item hide-lg">
                    <a className="nav-link" href="index.html">Home</a>
                  </li>
                  <li className="nav-item hide-lg">
                    <a className="nav-link" href="menu.html">menu</a>
                  </li>
                  <li className="nav-item hide-lg">
                    <a className="nav-link" href="about.html">about</a>
                  </li>


                   <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                      News
									</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="blog-home.html">Blog</a>
                      <a className="dropdown-item" href="blog-single.html">Blog Detail</a>
                    </div>
                  </li> 
                  <li className="nav-item">
                    <a className="nav-link" href="gallery.html">Gallery</a>
                  </li>
                </ul> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header