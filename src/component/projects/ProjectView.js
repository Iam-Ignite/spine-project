import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../common/NavBar'
import SideBarDashboard from '../common/sidebarDashboard'

function ProjectView() {
    return (
        <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] h-screen lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full flex p-8'>
                    <div>
                        <div className="my-10 flex items-center">
                            <Link className="rounded-sm flex items-center px-4 py-2 mx-2 border" to="/projects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                            </svg> GO Back</Link>
                        </div>
                        <div className='w-full py-10 md:pb-32 m-auto border bg-white px-16'>
                            <div className=" grid md:grid-cols-3 gap-6 items-end">
                                <div className="">
                                    <h4>Headline</h4>
                                    <p className='text-[#969696] text-sm'>ACA Investments</p>
                                </div>
                                <div className="">
                                    <h4>Client Name</h4>
                                    <p className='text-[#969696] text-sm'>Kolawole Abdul</p>
                                </div>
                                <div className="">
                                    <h4>Number of Hours</h4>
                                    <p className='text-[#969696] text-sm'>20 Hours</p>
                                </div>
                                <div className="">
                                    <h4>Project Name</h4>
                                    <p className='text-[#969696] text-sm'>Partnership</p>
                                </div>
                                <div className="">
                                    <h4>Email Address</h4>
                                    <p className='text-[#969696] text-sm'>Kolawole@gmail.com</p>
                                </div>
                                <div className="">
                                    <h4>Amount Paid</h4>
                                    <p className='text-[#969696] text-sm'>N 250,000.00</p>
                                </div>

                                <div className="">
                                    <h4>Overview</h4>
                                    <p className='text-[#969696] text-sm'>Explain what is required of our professional</p>
                                </div>
                                <p className='text-[#5EA820] text-sm'> In Progress</p>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between mt-8 md:items-center md:w-2/5"><label
                                htmlFor='file'
                                className='appearance-none flex items-center w-auto boder-4 bg-gray-300 border-dashed text-gray-700 text-xs border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                                <img
                                    src='/attach.svg'
                                    className='h-3 mx-3'
                                    alt=''
                                />
                               ACA Investments. Doc
                            </label>
                                <p className="text-[#2E5BFF] text-base">Download Document</p></div>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProjectView