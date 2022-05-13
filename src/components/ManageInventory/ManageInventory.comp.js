import { Button, Pagination, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axiosInstance from '../../utils/axios'

const ManageInventory = () => {
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
            title: "Actions",
            dataIndex: 'actions',
            render: (text, record, index) => {
                return (<>
                    <Link to={`/inventory/${record._id}`}>
                        <Button type='primary' className='me-1'>Manage</Button></Link>
                    <Button
                        onClick={() => { console.log(text, record, index) }}
                        type='primary'
                        danger>Delete</Button>
                </>)
            }
        }
    ];

    useEffect(() => {
        axiosInstance.get(`/inventory?page=${currentPage}&size=${pageSize}`).then(({ data }) => {
            const { data: items } = data.results
            setItems(items.map(item => ({ ...item, key: item._id })))
            setTotalData(data.results.totalData)
            setCurrentPage(data.results.currentPage)
        }).catch((err) => {

        }).finally(() => {
            setLoading(false)
        })
    }, [currentPage, pageSize])
    return (
        <div className='py-5 mx-auto'>
            <h2 className='text-center'>Manage Inventory</h2>
            <Table
                dataSource={items}
                columns={columns}
                scroll={{ y: 450 }}
                loading={loading}
                showSorterTooltip
                pagination={false}
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
                        />
                    </div>
                )}
            />




        </div>
    )
}

export default ManageInventory