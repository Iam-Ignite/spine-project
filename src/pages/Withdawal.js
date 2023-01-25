import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'

function Withdawal() {
    return (
        <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] h-screen pb-24 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full md:flex  p-8 px-4 md:px-6'>
                    <div>
                        <div className='mt-10 flex items-center md:ml-0'>
                            <Link
                                className='rounded-sm flex items-center px-4 py-1 mx-2 border'
                                to='/dashboard'>
                                <BiArrowBack className='mx-1 ' /> GO Back
                            </Link>
                            <h1 className='text-2xl font-bold fonts'>
                                Withdawal
                            </h1>
                        </div>
                        <form className='w-full md:w-96  md:mx-0 mt-5'>
                            <div className='flex items-center border border-gray-300 px-5 py-4 md:mr-4 rounded justify-between'>
                                <div className='flex items-center'>
                                    <img
                                        src='/banks.svg'
                                        alt='nbfmbds'
                                    />
                                    <div className='ml-4'>
                                        <p className='text-blue-700 fonts font-bold'>
                                            Bank Account
                                        </p>
                                        <small className='text-gray-500 fonts'>
                                            Withdraw using your Bank Details  </small>
                                    </div>
                                </div>
                                <div className='mb-8'>
                                    <input
                                        type='radio'
                                        id='Beginner'
                                        name='radio-group'
                                    />
                                    <label htmlFor='Beginner'></label>
                                </div>
                            </div>

                            <div className='flex items-center border my-4 border-gray-300 px-5 py-4 md:mr-4 rounded justify-between'>
                                <div className='flex items-center'>
                                    <img
                                        src='/btc.svg'
                                        alt='mnndsv'
                                    />
                                    <div className='ml-4'>
                                        <p className='text-blue-700 fonts font-bold'>
                                            Bitcoin Wallet
                                        </p>
                                        <small className='text-gray-500 fonts'>
                                            Withdraw using your wallet Address
                                        </small>
                                    </div>
                                </div>
                                <div className='mb-8'>
                                    <input
                                        type='radio'
                                        id='Intermediate'
                                        name='radio-group'
                                    />
                                    <label htmlFor='Intermediate'></label>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className='w-full h-auto md:p-10 p-5 md:mr-10 bg-white border'>
                        <form className='py-10'>
                            <div className='grid grid-cols-1'>
                               <div className='w-full md:flex justify-between items-center px-3  md:mb-6'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                                    htmlFor='grid-first-name'>
                                    Amount
                                </label>
                                <input
                                    className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='Enter Amount'
                                />
                            </div>
                                <div className='w-full md:flex justify-between items-center md:mb-6 relative px-3'>
                                    <label
                                        className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                                        htmlFor='grid-last-name'>
                                        Bank Name
                                    </label>
                                    <select
                                        className='block appearance-none text-xs  fonts w-full md:w-3/4 border bg-[#F4F4F4] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-state'>
                                        <option>
                                            Select Bank
                                        </option>
                                    </select>
                                    <div className='pointer-events-none absolute mx-4 inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'>
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-full md:flex justify-between items-center mt-4 md:mb-6 relative px-3'>
                                    <label
                                        className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                                        htmlFor='grid-last-name'>
                                        Card Type
                                    </label>
                                    <select
                                        className='block appearance-none text-xs  fonts w-full md:w-3/4 border bg-[#F4F4F4] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-state'>
                                        <option>
                                            Mastercard
                                        </option>
                                    </select>
                                    <div className='pointer-events-none absolute mx-4 inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                        <svg
                                            className='fill-current h-4 w-4'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'>
                                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                        </svg>
                                    </div>
                                </div>
                                <div className='w-full md:flex justify-between items-center mt-5 md:mb-6 px-3'>
                                    <label
                                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                                        htmlFor='grid-last-name'>
                                        Card Holder Name
                                    </label>
                                    <input
                                        className='appearance-none block w-full md:w-3/4 mb-4 text-xs bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        id='grid-last-name'
                                        type='text'
                                        placeholder='Enter Name on the card'
                                    />
                                </div>
                            </div>
                            <div className='w-full md:flex justify-between items-center px-3  md:mb-6'>
                                <label
                                    className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                                    htmlFor='grid-first-name'>
                                    Card Number
                                </label>
                                <input
                                    className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                    id='grid-first-name'
                                    type='text'
                                    placeholder='0000 0000 0000 000'
                                />
                            </div>

                            <button className='bg-blue-600 fonts w-[92%] md:w-auto mx-4 md:mx-0 md:ml-[11.5rem] py-2 mt-6 px-5 rounded-sm text-white'>
                                Withdawal
                            </button>

                        </form>
                    </div>
                </div>
            </main>
        </div>)
}

export default Withdawal