import { Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../utils/axios'

const ItemSection = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance.get("/inventory?size=6").then(({ data }) => {
            const { data: items } = data.results
            setItems(items)
        }).catch((err) => {

        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (
        <section className='my-5'>
            <h2 className='text-center'>
                Items
            </h2>
            <Spin size='large' spinning={loading} tip="Please wait..." wrapperClassName='py-4'>
                <div className='row g-2 row-cols-2 d-flex justify-content-center'>
                    {items.map((item) => (
                        <div key={item._id} className="col-md-3 card m-2">
                            <img src={item.image} style={{ height: '20rem' }} className="card-img-top img-fluid" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>

                                <p>Supplier: {item.supplier}</p>
                                <p>Price: {item.price} BDT</p>
                                <p>Quantity: {item.quantity}</p>
                                <Link to={`/inventory/${item._id}`} className="btn btn-primary">Update</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </Spin>
            <div className='d-flex justify-content-center'>
                <Link className='btn btn-primary mt-2' to='/inventory'>Manage Inventories</Link>
            </div>
        </section>
    )
}

export default ItemSection