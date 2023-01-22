import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import ProgresssbarJobs from '../component/utils/ProgresssbarJobs'

function ActivityLogView({ link }) {
    return (
        <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] pb-44 h-screen lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full flex p-4 md:p-8'>
                    <div>
                        <div className="my-5 flex items-center">
                            <Link className="rounded-sm flex items-center px-4 py-2 mx-2 border" to="/projects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                            </svg> GO Back</Link>
                        </div>
                        <div className='w-full md:flex'>

                            <div className='p-5 bg-white my-4  border h-72 w-96 rounded'>
                                <div className='flex justify-between'>
                                    <img src='/Mask Group 10.svg' alt='icom' />
                                    <BiDotsHorizontalRounded />
                                </div>
                                <p className='fonts text-sm py-3 text-gray-700'>
                                    Earnings available now: <b className="font-sans"> N 100.50</b>
                                </p>
                                <div className='my-3 flex items-center'>
                                    <span className='text-xs  font-sans py-2 text-black rounded-sm '>60%</span>
                                    <ProgresssbarJobs progress='50' istrue />


                                </div>
                                {
                                    link ? (
                                        <Link to={link}>
                                            <button className='text-white bg-blue-600 rounded text-sm  px-8 mt-4 py-2'>Message Client</button>
                                        </Link>
                                    ) : (

                                        <button className='text-white bg-blue-600 rounded text-sm  px-8 mt-4 py-2'>Message Client</button>
                                    )
                                }

                            </div>

                            <div className='w-full h-full bg-white my-4 rounded relative md:mx-4 border px-10 py-10'>
                                <div className='flex items-center'>
                                    <img src='/Mask Group 5.svg' alt='icom' />
                                    <div className='mx-4'>
                                        <h1 className='fonts py-1  text-lg'>
                                            ACN Investment Audit
                                        </h1>
                                        <p className='underline text-[#707070]'>
                                            ACN Invesyment PLC
                                        </p>
                                    </div>
                                </div>

                                <div className='border flex rounded-sm my-7'>
                                    <div className='px-4 w-full  py-3'>
                                        <p className='fonts text-xs text-gray-500'>
                                            Start date
                                        </p>
                                        <b className='fonts text-xs text-gray-600'>
                                            April 3, 2022
                                        </b>
                                    </div>
                                    <div className='px-4 w-full blr py-3'>
                                        <p className='fonts text-xs text-gray-500'>
                                            Due Date
                                        </p>
                                        <b className='fonts text-xs text-gray-600'>
                                            May 23, 2022
                                        </b>
                                    </div>
                                    <div className='px-4 w-full  py-3'>
                                        <p className='fonts text-xs text-gray-500'>
                                            Hours/ Week
                                        </p>
                                        <b className='fonts text-xs text-gray-600'>
                                            20
                                        </b>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row py-2 gap-2   md:items-center "><label
                                    htmlFor='file'
                                    className='appearance-none flex items-center w-auto boder-4 bg-gray-300 border-dashed text-gray-700 text-xs border rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                    <img
                                        src='/attach.svg'
                                        className='h-4 ml-2'
                                        alt=''
                                    />
                                    ACA Investments. Doc
                                </label>
                                    <p className="text-[#2E5BFF] text-sm">Download BRD</p></div>
                                <h1 className='font-sans text-sm mb-3 font-semibold'>
                                    Weekly Deliverables
                                </h1>
                                
                                <div className='grid grid-cols-3 gap-3'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            checked
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 1
                                        </label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            checked
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 2
                                        </label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            checked
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 3
                                        </label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            checked
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 4
                                        </label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 5
                                        </label>
                                    </div>
                                    <div className='flex items-center'>
                                        <input
                                            id='checkbox-table-1'
                                            type='checkbox'
                                            className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
                                        />
                                        <label
                                            htmlFor='checkbox-table-1'
                                            className='text-gray-600 mx-3 text-xs fonts'>
                                            Week 6
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default ActivityLogView