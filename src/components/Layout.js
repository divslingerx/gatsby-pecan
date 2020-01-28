import React from "react"
import Header from "./Header"
import Banner from "./Banner"
import Footer from "./Footer"



const Layout = ({ children, location }) => {

    return (
        <>
            <Header />
            <Banner location={location} />
            {children}
            <Footer />
        </>
    )
}

export default Layout