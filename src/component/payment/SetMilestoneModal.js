import React from 'react'
import { AiOutlineDelete, AiOutlineLeft, AiOutlinePlus } from 'react-icons/ai'

function SetMilestoneModal({ setModal, modal }) {
    return (
        <div
            className={`fixed w-screen h-screen inset-0 z-50 flex bg-black bg-opacity-75  justify-center items-center ${modal ? '' : 'hidden'
                }`}>
            <div className='relative p-4 px-6  bg-white shadow-xl  rounded-sm w-2/5 h-[65vh]'>
                <h1 className=' text-lg font-normal mb-0  fonts flex items-center'><span className='mr-1'><AiOutlineLeft /></span> Set Milestone</h1>

                <div className='flex  items-center mt-4'>
                    <div class='w-full  px-2 mb-6 md:mb-0'>
                        <label
                            class='block uppercase font-bold text-gray-700 text-xs  mb-2'
                            for='grid-first-name'>
                            Enter Milestone
                        </label>
                        <input
                            class='appearance-none block text-xs fonts w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none '
                            id='grid-first-name'
                            type='text'
                            placeholder='Select state'
                        />
                    </div>
                    <div class='w-3/5   mb-6 md:mb-0'>
                        <label
                            class='block uppercase font-bold text-gray-700 text-xs  mb-2'
                            for='grid-first-name'>
                            Enter Percentage
                        </label>
                        <input
                            class='appearance-none block text-xs fonts w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none '
                            id='grid-first-name'
                            type='text'
                            placeholder='Select pertcent'
                        />
                    </div>
                    <div class='w-2/5  ml-3 mb-6 md:mb-0'>
                        <button className="text-[#FF2E46] flex items-center"><AiOutlineDelete />Delete</button>
                    </div>
                </div>
                    <button className='bg-[#2e5bff59] ml-2 font-light py-2 px-5 fonts flex rounded-sm text-[#2E5BFF] items-center '><AiOutlinePlus className='font-bold mr-2'/> Add Milestone</button>

                <div className="flex justify-center">
                    <button className='bg-blue-600 absolute bottom-10 font-light py-2 px-5 fonts rounded-sm text-white'>Proceed to pay</button>
                </div>
            </div>
        </div>
    )
}

export default SetMilestoneModal