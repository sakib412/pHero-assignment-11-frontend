import React from 'react'
import { Link } from 'react-router-dom'

const ItemSection = () => {
    return (
        <section className='my-5'>
            <h2 className='text-center'>
                Items
            </h2>
            <div className='row g-2 row-cols-2 d-flex justify-content-center'>
                {Array(6).fill(null).map((item, index) => (
                    <div key={index} className="col-md-3 card m-2">
                        <img src="/images/cover.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            <p>Supplier: Najmus Sakib</p>
                            <p>Price: 89 BDT</p>
                            <p>Quantity: 10</p>
                            <Link to="/inventory/jfgj765vbhsdfjks76" className="btn btn-primary">Update</Link>
                        </div>
                    </div>
                ))}

            </div>
            <div className='d-flex justify-content-center'>

                <Link className='btn btn-primary' to='/manage-inventories'>Manage Inventories</Link>
            </div>
        </section>
    )
}

export default ItemSection