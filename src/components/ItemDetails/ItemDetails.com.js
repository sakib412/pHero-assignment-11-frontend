import React from 'react'

const ItemDetails = () => {
    return (
        <div className='row'>
            <h3 className='text-center'>Details</h3>
            <div className="col-md-4">
                <img className='img-fluid' src='/images/cover.jpg' alt='' />
            </div>
            <div className="col-md-8">
                <h3 className='text-center'>Item Name</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi qui natus dolore iste, quibusdam sequi inventore architecto? Iure fugiat nesciunt molestias at optio quae quas itaque. Dolorem, exercitationem quidem.</p>
                <p>Price: 75 BDT</p>
                <p>Quantity: 12</p>
                <p>Supplier: Najmus Sakib</p>
                <button className='btn btn-primary'>Delevered</button>

            </div>
        </div>
    )
}

export default ItemDetails