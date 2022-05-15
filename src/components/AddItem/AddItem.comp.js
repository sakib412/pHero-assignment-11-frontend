import { Form, Input, InputNumber, Button, message } from 'antd'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import axiosInstance from '../../utils/axios'

const AddItem = () => {
    const [user] = useAuthState(auth)
    const [form] = Form.useForm()
    const onAddItem = (values) => {

        axiosInstance.post('/inventory', { ...values, email: user.email }).then(({ data }) => {
            if (data) {
                form.resetFields()
                message.success({
                    content: "Item added. To see the item please visit 'My Items' page from the menu",
                    className: "mt-5"
                })
            }
        }).catch((e) => {
            console.log(e.message)
        })
    }
    return (
        <div className='py-5 mx-auto'>
            <h2 className='text-center'>Add Item</h2>
            <Form onFinish={onAddItem} layout='vertical' form={form} scrollToFirstError>
                <Form.Item name="name" label="Item Name"
                    rules={[{
                        required: true,
                        message: "PLease input name"
                    }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Item Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name='image' label='Image URL'
                    rules={[{
                        required: true,
                        message: "Please input image url"
                    }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='supplier' label='Supplier Name'
                    rules={[{
                        required: true,
                        message: "Please input supplier name"
                    }]}>
                    <Input />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item name="quantity" label="Quantity" style={{ display: 'inline-block', }}
                        rules={[{
                            required: true
                        }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="price" label="Price" style={{ display: 'inline-block', margin: '0 8px' }}
                        rules={[{
                            required: true
                        }]}>
                        <InputNumber />
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType="submit">Add</Button>
                </Form.Item>

            </Form>

        </div>
    )
}

export default AddItem