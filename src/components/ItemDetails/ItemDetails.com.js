import { Button, Form, InputNumber } from 'antd'
import React from 'react'

const ItemDetails = () => {

    return (
        <div className='row d-flex justify-content-center align-items-center my-5'>
            <h3 className='text-center'>Details</h3>
            <div className="col-md-4">
                <img className='img-fluid' src='/images/cover.jpg' alt='' />
            </div>
            <div className="col-md-8">
                <h3 className='text-center'>Item Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi qui natus dolore iste, quibusdam sequi inventore architecto? Iure fugiat nesciunt molestias at optio quae quas itaque. Dolorem, exercitationem quidem.</p>
                <p>Price: <strong>75 BDT</strong></p>
                <p>Quantity: <strong>12</strong></p>
                <p>Supplier: <strong>Najmus Sakib</strong> </p>
                <button className='btn btn-primary mb-3'>Delevered</button>

                <h6 className='mt-3 text-primary'>Update quantity</h6>
                <Form layout='inline'>
                    <Form.Item name="quantity">
                        <InputNumber />
                    </Form.Item>
                    <Button htmlType='submit' type='primary'>Add</Button>
                </Form>

            </div>
        </div>
    )
}

export default ItemDetails