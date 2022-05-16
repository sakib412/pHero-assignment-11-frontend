import { Button, message, Modal, Pagination, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import axiosInstance from '../../utils/axios'
import { errorMessage } from '../../utils/message'
import auth from '../../firebase.init';

const MyItems = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = Object.fromEntries([...searchParams])
    const [items, setItems] = useState([])
    const [totalData, setTotalData] = useState(0)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(parseInt(params.page) || 1)
    const [pageSize, setPageSize] = useState(parseInt(params.size) || 10)

    const onPaginationChange = (page) => { setCurrentPage(page) }

    const onSizeChanged = (_, size) => { setPageSize(size) }

    useEffect(() => {
        setSearchParams({ page: currentPage, size: pageSize })
    }, [currentPage, pageSize, setSearchParams])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity
        },
        {
            title: "Price",
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price
        },
        {
            title: "Product Creator Email",
            dataIndex: 'email',
        },

        {
            title: "Actions",
            dataIndex: 'actions',
            render: (text, record, index) => {
                return (<>
                    <Link to={`/inventory/${record._id}`}>
                        <Button type='primary' className='me-1'>Manage</Button></Link>
                    <Button
                        onClick={() => { onDelete(record) }}
                        type='primary'
                        danger>Delete</Button>
                </>)
            }
        }
    ];

    const onDelete = (record) => {
        Modal.confirm({
            title: "Are you sure?",
            content: `You want to delete ${record.name}?`,
            onOk: () => {
                axiosInstance.delete(`/inventory/${record._id}`).then((res) => {
                    setItems(items.filter((i) => i._id !== record._id))
                    message.success({ content: "Successfully deleted", className: 'mt-5' })
                    setTotalData(totalData - 1)
                })
            },
            okText: "Delete",
            okButtonProps: { danger: true }
        })
    }

    useEffect(() => {
        axiosInstance.get(`/inventory/me?page=${currentPage}&size=${pageSize}`).then(({ data }) => {
            const { data: items } = data.results
            setItems(items.map(item => ({ ...item, key: item._id })))
            setTotalData(data.results.totalData)
            setCurrentPage(data.results.currentPage)
        }).catch((err) => {
            errorMessage(err.message)
            signOut(auth)
        }).finally(() => {
            setLoading(false)
        })
    }, [currentPage, pageSize])
    return (
        <div className='py-5 mx-auto'>
            <div className='d-flex justify-content-between'>
                <h2 className=''>Manage Inventory</h2>
                <p>
                    <Link className='btn btn-primary text-white' to="/add-item">Add new Item</Link>
                </p>
            </div>
            <Table
                dataSource={items}
                columns={columns}
                scroll={{ y: 450 }}
                loading={loading}
                showSorterTooltip
                pagination={false}
                locale={{
                    emptyText: "No Item found. Please add some items first."
                }}
                footer={() => (
                    <div className='d-flex justify-content-center'>
                        <Pagination
                            current={currentPage}
                            total={totalData}
                            onChange={onPaginationChange}
                            onShowSizeChange={onSizeChanged}
                            pageSize={pageSize}
                            showSizeChanger
                            pageSizeOptions={[5, 10, 15, 20, 30, 50]}
                            responsive
                            showTotal={(total, range) => { return `${range[0]}-${range[1]} of ${total} items` }}
                        />
                    </div>
                )}
            />
        </div>
    )
}

export default MyItems