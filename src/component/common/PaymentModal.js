import React from 'react'
import { VscClose } from 'react-icons/vsc'

export default function PaymentModal({setModal,modal}) {
    // ixed flex z-50 items-center justify-center   bg-black bg-opacity-75 modal
    return (
        <div
            className={`fixed w-screen h-screen inset-0 z-50 flex bg-black bg-opacity-75  justify-center items-center ${modal ? '' : 'hidden'
                }`}>
            <div className='relative p-4 px-5  bg-white shadow-xl rounded-sm lg:max-w-lg'>
                <VscClose onClick={() => setModal(!true)} className='ml-auto cursor-pointer text-2xl' />
                <div className=' '>
                    <h1 className=' text-lg font-normal mb-0  fonts'>Select payment channel</h1>

                    <div className='my-2 mx-3'>
                        <p className='py-2 mb-2 text-sm fonts text-gray-700'>Expected Amount</p>
                        <b className='border border-blue-400 mb-0  rounded-md px-3 py-2 text-blue-600 bg-blue-100'>N250,000.00</b>
                    </div>

                    <div className=''>
                        <p className='py-4 mb-0 text-sm fonts text-gray-700'>Choose how you want to make payment</p>
                        <div className='flex'>
                            <div className='mb-8 mr-3'>
                                <input
                                    type='radio'
                                    id='Interswitch'
                                    name='radio-group'
                                />
                                <label className=' text-sm fonts text-gray-700' for='Interswitch'>Interswitch</label>
                            </div>
                            <div className='mb-8 mx-3'>
                                <input
                                    type='radio'
                                    id='Paypal'
                                    name='radio-group'
                                />
                                <label className=' text-sm fonts text-gray-700' for='Paypal'>Paypal</label>
                            </div>
                            <div className='mb-8 mx-3'>
                                <input
                                    type='radio'
                                    id='Spine Wallet'
                                    name='radio-group'
                                />
                                <label className=' text-sm fonts text-gray-700' for='Spine Wallet'>Spine Wallet</label>
                            </div>
                        </div>
                    </div>

                    <button className='bg-blue-600 font-light  text-center py-2  px-5 fonts rounded-sm text-white'>Proceed to pay</button>
                </div>
            </div>
        </div>
    )
}
