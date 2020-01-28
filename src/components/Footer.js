import React from 'react'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4 style={{ color: "#c37236" }}>Contact</h4>
                <ul>
                  <li>296 Washington Street</li>
                  <li>Brighton, MA 02135</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4 style={{ color: "#c37236" }}>Newsletter</h4>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form >
                    <div className="input-group">
                      <input className="form-control" name="EMAIL"

                        required="" type="email" />
                      <div style={{ background: "#c37236" }} className="input-group-btn">
                        <button style={{ background: "#c37236" }} className="btn btn-default" type="submit">
                          <span style={{ background: "#c37236" }} className="lnr lnr-arrow-right"></span>
                        </button>
                      </div>
                      <div className="info"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center justify-content-between">
            <p className="footer-text m-0 col-lg-6 col-md-12">Copyright © <span id="date">2019</span> All rights
					reserved</p>
            <div className="col-lg-6 col-sm-12 footer-social">
              <a href="www.facebook.com"><img src={facebook} alt="" /></a>
              <a href="www.twitter.com"><img src={twitter} alt="" /></a>
              <a href="www.instagram.com"><img src={instagram} alt="" /></a>

            </div>
          </div>
        </div>
      </footer>
    )
  }
}



export default Footer
