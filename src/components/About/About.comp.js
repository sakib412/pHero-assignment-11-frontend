import React from 'react'

const About = () => {
    return (
        <section className="about-us my-5" id="about">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-content">
                        <h1 className="content-title">About us</h1>
                        <h3 className="py-2 mb-3">We have a lot of great new things for you but overall, the Farm Program we created in 2014 will remain.</h3>
                        <h5 className="" >Mon-Fri: 4-6pm, City Cyclery 553, Windsor </h5>
                        <h5 className="" >Sat-Sun: 8am-1pm, Downtown Windsor Market</h5>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className=" about-img">
                        <img style={{ height: '20rem' }} alt="" className='img-fluid rounded' src="https://i.ibb.co/ZSWgXRQ/amy-shamblen-bqjy-Fm32-HDM-unsplash.jpg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About