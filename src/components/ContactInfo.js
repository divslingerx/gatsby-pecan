import React from "react"
import { Link } from "gatsby"

const ContactInfo = () => {
    return (
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
            <Link to="/menu/" className="primary-btn text-uppercase" style={{ background: "#c37236" }}>SEE FULL MENU</Link>
        </div>
    )
}

export default ContactInfo