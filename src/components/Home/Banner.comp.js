import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner position-relative py-3 py-md-5 text-center">
            <div className="col-md-5 py-lg-5 mx-auto my-5">
                <h1 className="display-4 font-weight-normal text-white">Punny headline</h1>
                <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
            </div>
            <div className="product-device box-shadow d-none d-md-block"></div>
            <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </section>
    )
}

export default Banner