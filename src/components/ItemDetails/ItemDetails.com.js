import { Button, Form, InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axios'

const ItemDetails = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [buttonDisabled, setButtonDisabled] = useState(false)
    useEffect(() => {
        axiosInstance.get(`/inventory/${id}`).then(({ data }) => {
            setItem(data.results)
        })
    }, [id])

    const onStockUpdate = ({ quantity }) => {
        setButtonDisabled(true)
        axiosInstance.put(`/inventory/${id}`, {
            quantity
        }).then(({ data }) => {
            setItem(data.results)

        }).finally(() => {
            setButtonDisabled(false)
        })
        console.log(quantity)
    }

    return (
        <div className='row d-flex justify-content-center align-items-center my-5'>
            <h3 className='text-center'>ID: {item._id}</h3>
            <div className="col-md-4">
                <img className='img-fluid' src='/images/cover.jpg' alt='' />
            </div>
            <div className="col-md-8">
                <h3 className='text-primary'>{item?.name}</h3>
                <p>{item?.description}</p>
                <p>Price: <strong>{item.price} BDT</strong></p>
                <p>Quantity: <strong>{item.quantity ? item.quantity : "Soldout"}</strong></p>
                <p>Supplier: <strong>{item.supplier}</strong> </p>
                <Button disabled={buttonDisabled || !item.quantity} className='mb-3' type='primary' onClick={() => {
                    onStockUpdate({ quantity: -1 })
                }}>Delevered</Button>

                <h6 className='mt-3 text-primary'>Increase quantity</h6>
                <Form
                    onFinish={onStockUpdate}
                    layout='inline'
                    initialValues={{ "quantity": 1 }}>
                    <Form.Item
                        name="quantity"
                        rules={[
                            { type: "number", min: 1 },
                            { type: "number", max: 100 }
                        ]}>
                        <InputNumber />
                    </Form.Item>
                    <Button htmlType='submit' disabled={buttonDisabled} type='primary'>Add</Button>
                </Form>

            </div>
        </div>
    )
}

export default ItemDetails