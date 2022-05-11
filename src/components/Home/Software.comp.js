import React from 'react'

const Software = () => {
    return (
        <section id="software" className="row bg-light my-5">
            <div className="col-md-6">
                <img src='/images/software.jpg' className='img-fluid' alt='software' />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="p-4">
                    <h3 className='text-center'>Software that gives you the visibility you need</h3>
                    <ul className="list-group">
                        <li className='list-group-item'>
                            Dashboard
                        </li>
                        <li className='list-group-item'>
                            Order Status
                        </li>
                        <li className='list-group-item'>

                            Shipment Tracking
                        </li>
                        <li className='list-group-item'>

                            Inventory Levels
                        </li>
                        <li className='list-group-item'>

                            Reporting Engine
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Software