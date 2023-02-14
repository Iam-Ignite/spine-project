import React, { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import PaymentModal from './PaymentModal';
import SetMilestoneModal from './SetMilestoneModal';

export default function PaymentModalTwo({ setModalTwo, modalTwo }) {
     const [modalSwitch, setModalSwitch] = useState("")
     const [modal, setModal] = useState(false)

const modalsItems = () => {

    switch (modalSwitch) {
        case "oneOff":
            return <PaymentModal setModal={setModal} modal={modal}/>;

        case "mileStone":
            return <SetMilestoneModal setModal={setModal} modal={modal}/>;

        default:
            break;
    }
}
 

 const handleModal = () => {
     setModalTwo(false);
     setModal(true)
 } 

    return (
        <>
            <div
                className={`fixed w-screen h-screen inset-0 z-50 flex bg-black bg-opacity-75  justify-center items-center ${modalTwo ? '' : 'hidden'
                    }`}>
                <div className='relative p-4 px-5  bg-white shadow-xl rounded-sm lg:max-w-lg'>
                    <VscClose onClick={() => setModalTwo(!true)} className='ml-auto cursor-pointer text-2xl' />
                    <div className=' px-3'>
                        <div className="border-b pb-3">
                            <h1 className=' text-lg   font-normal mb-0  fonts'> Payment Mode</h1>
                        </div>


                        <div className=''>
                            <div className='flex flex-col'>
                                <div className='my-4'>
                                    <input
                                        type='radio'
                                        id='Interswitch'
                                        name='radio-group'
                                    />
                                    <label className=' text-sm fonts text-gray-700' onClick={() => setModalSwitch("oneOff")} htmlFor='Interswitch'>One Off</label>
                                </div>
                                <div className='mb-8'>
                                    <input
                                        type='radio'
                                        id='Paypal'
                                        name='radio-group'
                                    />
                                    <label className=' text-sm fonts text-gray-700' onClick={() => setModalSwitch("mileStone")} htmlFor='Paypal'>Milestone</label>
                                </div>

                            </div>
                        </div>

                        <button onClick={() => handleModal()} className='bg-blue-600 font-light  text-center py-2  px-5 fonts rounded-sm text-white'>Proceed to pay</button>
                    </div>
                </div>
            </div>
            {modalsItems()}
        </>

    )
}
