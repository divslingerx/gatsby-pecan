import React from "react"
import TelephoneLink from "./TelephoneLink"

const Map = () => {
    return (
        <div class="section-title relative">
            <h1>
                Little Pecan <br />
                Some Tastes Bring <br />
                Smiles <br />
            </h1>
            <div class="mb-20">
                <p>296 Washington Street, <br />Brighton, Ma, 02135</p>
            </div>
            <div class="mb-20">
                <TelephoneLink />
            </div>
            <div class="mail">
                <a href="info@PecanBistro.com" target="_top">info@PecanBistro.com</a>
            </div>
        </div>
    )
}

export default Map