import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'
import { AiOutlineDelete } from "react-icons/ai";

function SetRate() {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full h-auto md:p-10 p-4 bg-white border'>
                <div className='sticky  '>
                    <h3 className='text-3xl fonts'>
                        Set Rate
                    </h3>
                    <p className='py-1 text-base fonts  fonts text-neutral'>
                        Set how much you will like to bill
                    </p>

                    <p className='text-xs flex fonts mb-2 items-center text-red-300'>
                        <FiAlertCircle /> Please note that Spine
                        charges 10% when you begin a contract with
                        a new client.
                    </p>
                </div>
                <div className="md:flex">
                    <div className='w-full  mb-6 md:mb-3'>
                        <input
                            type='radio'
                            id='Hourly'
                            name='radio-group'
                        />
                        <label
                            htmlFor='Hourly'
                            className='text-black text-sm font-bold fonts'>
                            Hourly
                        </label>
                        <p className='text-gray-500 text-xs fonts ml-8 my-1'>
                            Get paid by the hour for your
                            service.
                        </p>
                    </div>

                    <div className='w-full mb-6 md:mb-4'>
                        <input
                            type='radio'
                            id='Intermediate'
                            name='radio-group'
                        />
                        <label
                            htmlFor='Intermediate'
                            className='text-black font-bold text-sm fonts'>
                            One-off Payment
                        </label>
                        <p className='text-gray-500 text-xs fonts ml-8 my-1'>
                            Get paid by the hour for your
                            service.
                        </p>
                    </div>
                </div>
                <div className="md:flex">
                    <form className='w-full'>
                        <div className=''>

                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                  Enter Service Name
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='Enter here'
                                />
                            </div>
                            <div className='w-full relative  px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-last-name'>
                                    Select Currency
                                </label>
                                <select
                                    className='block appearance-none text-xs w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    id='grid-state'>
                                    <option>Select Currency</option>
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                    <svg
                                        className='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'>
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Set your hourly rate
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='Set your hourly rate'
                                />
                            </div>
                            <div className='w-full  px-3'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-last-name'>
                                  Spine Service Charge
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-slate-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                    id='grid-last-name'
                                    type='text'
                                    placeholder='NGN 100 / Hr'
                                />
                            </div>
                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Rate After Service Charge
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-slate-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 '
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='N 25,000 / Hr '
                                />
                            </div>
                        </div>

                    </form>
                    <form className='w-full'>
                        <div className=''>

                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Enter Service Name
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='Enter here'
                                />
                            </div>
                            <div className='w-full relative  px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-last-name'>
                                    Estimated Duration
                                </label>
                                <select
                                    className='block appearance-none text-xs w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    id='grid-state'>
                                    <option>Select here</option>
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                    <svg
                                        className='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'>
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full relative  px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-last-name'>
                                    Select Currency
                                </label>
                                <select
                                    className='block appearance-none text-xs w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    id='grid-state'>
                                    <option>Select Currency</option>
                                </select>
                                <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                    <svg
                                        className='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'>
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Set Project fee
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='Enter here'
                                />
                            </div>
                            <div className='w-full  px-3'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-last-name'>
                                    Rate After Service Charge
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-slate-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
                                    id='grid-last-name'
                                    type='text'
                                    placeholder='NGN 15 000'
                                />
                            </div>
                            <div className='w-full px-3 mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Spine Service Charge
                                </label>
                                <input
                                    className='appearance-none block text-xs fonts w-full bg-slate-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 '
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='N 25,000 '
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-3 md:mb-6 lg:mb-6'>
                            <div className='w-full  md:px-3 lg:px-3 lg:mb-6 md:mb-0'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2 mt-3'
                                    htmlFor='grid-first-name'>
                                    Notes (If Any)
                                </label>
                                <textarea
                                    className='appearance-none block text-xs fonts w-full bg-white text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500 '
                                    id='grid-first-name'
                                    type='text'
                                    rows='4'
                                    placeholder='Enter Here '
                                />
                            </div>
                        </div>

                    </form>
                </div>
                <div className="flex text-sm">
                    <button className='bg-[#2E5BFF] mx-3 py-2 mt-6 fonts px-5 rounded-sm text-white'>
                        Save
                    </button>   <button className='border border-[#2E5BFF] mx-3 py-2 mt-6 fonts px-5 rounded-sm text-[#2E5BFF]'>
                        Add Rate
                    </button>
                </div>
            </div>

            <div className="md:ml-5 mb-5 md:w-80">
                <h1 className='font-sans font-semibold mb-2'>Services</h1>

                <div className="bg-white border w-full p-5">
                    <b className='text-[#2E5BFF] text-sm'>Content writing</b>
                    <p className='text-xs text-gray-600'>1month , N25,000</p>
                    <div className="flex gap-2 mt-1">
                        <button className='flex items-center bg-[#2E5BFF] text-white px-4 py-1 text-xs rounded'><BiEdit />Edit</button>
                        <button className='flex items-center bg-[#2E5BFF] text-white px-4 py-1 text-xs rounded'><AiOutlineDelete /> Delete</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SetRate