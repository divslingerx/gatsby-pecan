import React from "react"

const ContactForm = () => {
  return (
    <form class="contact-form" >
      <div class="row">
        <div class="col-lg-12 d-flex flex-column mb-20">
          <input name="contact-name" placeholder="Contact Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Contact Name'"
            class="form-control" required="" type="text" />
        </div>
        <div class="col-lg-12 d-flex flex-column mb-20">
          <input name="email-address" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"
            class="form-control" required="" type="email" />
        </div>
        <div class="col-lg-12 d-flex flex-column mb-20">
          <input name="phone-number" placeholder="Phone Number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'"
            class="form-control" required="" type="text" />
        </div>
        <div class="col-lg-12 d-flex flex-column">
          <textarea class="form-control" name="post-message" placeholder="Post a message" onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'Post a message'" required=""></textarea>
        </div>

        <div class="col-lg-12 d-flex justify-content-end">
          <button class="primary-btn mt-30 text-uppercase">Send Message</button>
        </div>
        <div class="alert-msg"></div>
      </div>
    </form>
  )
}

export default ContactForm