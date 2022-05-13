import { Form, Input, InputNumber, Button, message } from 'antd'
import React from 'react'

const AddItem = () => {
    const [form] = Form.useForm()
    const onAddItem = (values) => {
        console.log(values)
        form.resetFields()
        message.success({
            content: "Item added. To see the item please visit 'My Items' page from the menu",
            className: "mt-5"
        })
    }
    return (
        <div className='py-5 mx-auto'>

            <h2 className='text-center'>Add Item</h2>
            <Form onFinish={onAddItem} layout='vertical' form={form}>
                <Form.Item name="name" label="Item Name">
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Item Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name='url' label='Image URL'>
                    <Input />
                </Form.Item>
                <Form.Item name='supplier' label='Supplier Name'>
                    <Input />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                    <Form.Item name="quantity" label="Quantity" style={{ display: 'inline-block', }}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="price" label="Price" style={{ display: 'inline-block', margin: '0 8px' }}>
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