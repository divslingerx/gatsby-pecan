import React from "react"
import Menu from "./Menu"
import ContactInfo from "./ContactInfo"

export default ({ menu }) => {
  return (

    <section className="menu-area" id="menu_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <ContactInfo />
          </div>
          <div className="col-lg-7 col-md-7">
            <Menu menu={menu} />
          </div>
        </div>
      </div>
    </section>

  )
}