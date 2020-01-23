import React from "react"
import MenuSection from "./MenuSection"

export default ({ menu }) => {
  return (

    <section className="menu-area" id="menu_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="section-title relative">
              <h1>
                Some Tastes <br />
                Bring Smiles <br />
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo
							consequat.</p>
              <a href="www.google.com" className="primary-btn text-uppercase" style={{ background: "#c37236" }}>See Full Menu</a>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="menu-list">
              {menu.sections.map(section => {
                return (
                  <MenuSection section={section} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}