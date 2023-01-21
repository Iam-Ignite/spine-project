import React from 'react'

function PaymentModal({ modal, setModal }) {
    return (
        <div
            className={`fixed flex inset-0 z-50 items-center justify-center px-5   bg-black bg-opacity-75 modal ${modal ? '' : 'hidden'
                }`}>
            <div className='relative max-w-lg md:h-96  px-10 py-6 w-full  bg-white shadow-xl rounded-xl lg:max-w-lg'>
                <b className='font-sans py-4 mt-8 text-xl font-medium'>Last Payment Details</b>
                <p className='text-gray-600 text-sm mt-5'>April 02, 2022</p>

                <div className="grid grid-cols-2 border-b mt-8 py-2">
                    <p className='text-gray-600 text-sm '>Amount</p>
                    <h6 className='text-base'>N 1,500</h6>
                </div>
                <div className="grid grid-cols-2 border-b py-2">
                    <p className='text-gray-600 text-sm '>Card Type</p>
                    <h6 className='text-base'>Mastercard</h6>
                </div>
                <div className="grid grid-cols-2 border-b py-2">
                    <p className='text-gray-600 text-sm '>Card Holder Name</p>
                    <h6 className='text-base'>Enter Name on the card</h6>
                </div>
                <div className="grid grid-cols-2 border-b py-2">
                    <p className='text-gray-600 text-sm '>Card Number</p>
                    <h6 className='text-base'>0000 0000 0000 000</h6>
                </div>
            
                <div className='flex mt-8 justify-center'>
                    <button onClick={() => setModal(false)}
                        className='px-4 py-2 text-base fonts text-white btn bg-auraPrimary rounded-sm bg-blue-600'>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal