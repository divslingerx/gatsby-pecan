import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Map from "../components/Map"

const ContactPage = ({location}) => {
    return (
        <Layout location={location}>
            <section class="contact-area section-gap">
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-lg-6 col-md-6">
                            <iframe
                                title="Little Pecan Bistro Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.701778181399!2d-71.15323508509424!3d42.34888114380106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379b7d56c52df%3A0xc5cb1b7cb3dfa0fc!2sLittle%20Pecan%20Bistro!5e0!3m2!1sen!2sus!4v1578680732718!5m2!1sen!2sus"
                                width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                        </div>
                        <div class="offset-lg-1 col-lg-5 col-md-6">
                            <Map />
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactPage