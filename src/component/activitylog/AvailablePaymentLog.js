import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PaymentModal from '../payment/PaymentModal';

function AvailablePaymentLog() {
     const [modal, setModal] = useState(false);


  return (
    <div className='mx-5 md:mx-16'>
      <h1 className='font-sans font-medium text-xl '>AvailablePaymentLog</h1>

      <div className='w-full mt-5   bg-white border'>
        <div className="flex justify-between px-8 mb-8 border-b  py-5 mt-5">
          <div className="">
            <h1 className='font-sans text-base font-medium mx-2'>Available Balance</h1>
            <h1 className='font-sans text-lg font-medium mx-2'>N 1500.00</h1>
          </div>
          <Link to="/activitylog/withdraw" >
          <button className='text-white bg-blue-600 rounded text-sm  px-8 mt-4 py-2'>Withdraw</button>
          </Link>

        </div>
        <div className="flex justify-between px-8 mb-8">
          <div className="">
            <h1 className='font-sans text-base font-medium mx-2'>Available Balance</h1>
            <h1 className='font-sans text-lg font-medium mx-2'>N 1500.00</h1>
          </div>
          <button onClick={() => setModal(true)} className='text-blue-600 border-blue-600 border bg-transparent rounded text-sm  px-6 mt-4 py-2'>View Details</button>

        </div>

      </div>
      <PaymentModal modal={modal} setModal={setModal}/>

    </div>
  )
}

export default AvailablePaymentLog