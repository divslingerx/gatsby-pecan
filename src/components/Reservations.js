import React from "react"

export default () => {
  return (
    <section className="reservation-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <form className="booking-form" id="myForm" action="">
              <div className="row">
                <div className="input-group col-lg-6 mb-20">
                  <input id="event_date"
                    className="form-control datepicker" placeholder="Event Date" required type="text" />
                  <span className="input-group-append">
                    <button className="btn btn-outline-secondary border-left-0 border-0" type="button">
                      <i className="fa fa-calendar reservation-calendar"></i>
                    </button>
                  </span>
                </div>

                <div className="col-lg-6 d-flex flex-column mb-20">
                  <div className="nice-select app-select form-control " tabOndex="0">
                    <span className="current">Event Time</span>
                    <ul className="list">
                      <li data-value="Project you want to donate"
                        data-display="Project you want to donate" className="option selected">Meal
											Preferences</li>
                      <li data-value="1" className="option">05pm</li>
                      <li data-value="2" className="option">08pm</li>
                      <li data-value="3" className="option">09pm</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 d-flex flex-column mb-20">
                  <div className="nice-select app-select form-control " tabOndex="0">
                    <span className="current">Number of guests</span>
                    <ul className="list">
                      <li data-value="Project you want to donate"
                        data-display="Project you want to donate" className="option selected">Number
											of guests</li>
                      <li data-value="1" className="option">Number of guests 1</li>
                      <li data-value="2" className="option">Number of guests 2</li>
                      <li data-value="3" className="option">Number of guests 3</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12 d-flex flex-column mb-20">
                  <input name="contact-name" placeholder="Contact Name" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Contact Name'" className="form-control" required=""
                    type="text" />
                </div>
                <div className="col-lg-12 d-flex flex-column mb-20">
                  <input name="email-address" placeholder="Email Address" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email Address'" className="form-control" required=""
                    type="email" />
                </div>
                <div className="col-lg-12 d-flex flex-column mb-20">
                  <input name="phone-number" placeholder="Phone Number" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Phone Number'" className="form-control" required=""
                    type="text" />
                </div>
                <div className="col-lg-12 d-flex flex-column">
                  <textarea className="form-control" name="post-message"
                    placeholder="Anything we need to know?" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'any we need to know?'" required=""></textarea>
                </div>

                <div className="col-lg-12 d-flex justify-content-end">
                  <button style={{ background: "#c37236" }} className="primary-btn dark mt-30 text-uppercase">Send Reservation</button>
                </div>
                <div className="alert-msg"></div>
              </div>
            </form>
          </div>
          <div className="offset-lg-1 col-lg-4 col-md-6">
            <div className="section-title relative">
              <h1>
                Looking <br />
                To Book <br />
                A Table? <br />
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo
                consequat.
						</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}