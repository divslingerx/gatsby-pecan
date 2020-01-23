import React from "react"

export default () => {
    return (
        <section className="chefs-quotes-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="section-title relative">
                            <h1>
                                Chef’s <br />
                                Quotes
						</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo
                                consequat. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Quotes
						</p>
                            <img height="200px" width="200px" src="img/signature.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6 col-md-6">
                        <div className="mt--120">
                            <img className="chef-img img-fluid" src="img/chefs-quotes.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}