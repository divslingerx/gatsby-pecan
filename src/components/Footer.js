import React from 'react'
import { Link } from 'gatsby'


import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer-area pt-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h4 style={{ color: "#c37236" }}>Contact</h4>
                <ul>
                  <li><a href="#">296 Washington Street</a></li>
                  <li><a href="#">Brighton, MA 02135</a></li>

                </ul>
              </div>
            </div>

            <div class="col-lg-4  col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h4 style={{ color: "#c37236" }}>Newsletter</h4>
                <p>Stay update with our latest</p>
                <div class="" id="mc_embed_signup">
                  <form >
                    <div class="input-group">
                      <input type="text" class="form-control" name="EMAIL"

                        required="" type="email" />
                      <div style={{ background: "#c37236" }} class="input-group-btn">
                        <button style={{ background: "#c37236" }} class="btn btn-default" type="submit">
                          <span style={{ background: "#c37236" }} class="lnr lnr-arrow-right"></span>
                        </button>
                      </div>
                      <div class="info"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom row align-items-center justify-content-between">
            <p class="footer-text m-0 col-lg-6 col-md-12">Copyright © <span id="date">2019</span> All rights
					reserved</p>
            <div class="col-lg-6 col-sm-12 footer-social">
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
