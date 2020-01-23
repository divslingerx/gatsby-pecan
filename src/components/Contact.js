import React from "react"

export default () => {
  return (
    <section className="contact-area section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <iframe
              title="Little Pecan Bistro Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.701778181399!2d-71.15323508509424!3d42.34888114380106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379b7d56c52df%3A0xc5cb1b7cb3dfa0fc!2sLittle%20Pecan%20Bistro!5e0!3m2!1sen!2sus!4v1578680732718!5m2!1sen!2sus"
              width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
          </div>
          <div className="offset-lg-1 col-lg-5 col-md-6">
            <div className="section-title relative">
              <h1>
                Little Pecan <br />
                Some tastes bring<br />
                smiles <br />
              </h1>
              <div className="mb-40">
                <p>296 Washington Street, Brighton, Ma, 02135</p>
              </div>
              <div className="mb-40">
                <p>(617) 277-1654</p>
              </div>
              <div className="mail">
                <p>info@LittlePecanBistro.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}