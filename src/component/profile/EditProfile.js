import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile() {
    return (
        <div className='w-full h-auto md:p-10 p-5 bg-white border'>
            <div className="flex justify-between">
                <h1 className='font-sans text-lg font-medium mx-2'>Edit Profile</h1>
                <div className=" flex items-center">
                    <Link className="rounded-sm flex items-center px-4 py-2 mx-2 border" to="/projects"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                    </svg> GO Back</Link>
                </div>
            </div>
            <form className='py-10'>
                <div className='grid grid-cols-1'>
                    <div className='w-full md:flex justify-between mt-5 md:mb-2 px-3'>
                        <label
                            className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                            htmlFor='grid-last-name'>
                            Full Name
                        </label>
                        <input
                            className='appearance-none block w-full md:w-3/4 mb-4 text-xs bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-last-name'
                            type='text'
                            placeholder='Enter Full Name'
                        />
                    </div>
                    <div className='w-full md:flex justify-between  md:mb-2 px-3'>
                        <label
                            className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                            htmlFor='grid-last-name'>
                            Email
                        </label>
                        <input
                            className='appearance-none block w-full md:w-3/4 mb-4 text-xs bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-last-name'
                            type='text'
                            placeholder='Enter Email address'
                        />
                    </div>
                    <div className='w-full md:flex justify-between md:mb-2 relative px-3'>
                        <label
                            className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                            htmlFor='grid-last-name'>
                            Career
                        </label>
                        <select
                            className='block appearance-none text-xs  fonts w-full md:w-3/4 border bg-[#F4F4F4] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-state'>
                            <option>
                                Business Analyst
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
                      <div className='w-full md:flex justify-between md:mb-2 mt-2 relative px-3'>
                        <label
                            className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                            htmlFor='grid-last-name'>
                            Level of experience
                        </label>
                        <select
                            className='block appearance-none text-xs  fonts w-full md:w-3/4 border bg-[#F4F4F4] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-state'>
                            <option>
                                Senior
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
                    <div className='w-full md:flex justify-between mt-2 md:mb-2 px-3'>
                        <label
                            className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                            htmlFor='grid-last-name'>
                            Phone Number
                        </label>
                        <input
                            className='appearance-none block w-full md:w-3/4 mb-4 text-xs bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-last-name'
                            type='text'
                            placeholder='Enter Phone Number'
                        />
                    </div>
                </div>
                <div className='w-full md:flex justify-between px-3  md:mb-2'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        htmlFor='grid-first-name'>
                        Location
                    </label>
                    <input
                        className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        id='grid-first-name'
                        type='text'
                        placeholder='Enter Location'
                    />
                </div>
                 <div className='w-full md:flex justify-between px-3  md:mb-2'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        htmlFor='grid-first-name'>
                        Overview
                    </label>
                    <textarea name="" className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="" cols="30" rows="10"></textarea>
                </div>
              
                <button className='bg-blue-600 fonts w-[92%] md:w-auto mx-4 md:mx-0 md:ml-[11.5rem] py-2 mt-6 px-5 rounded-sm text-white'>
                    Save Changes
                </button>

            </form>
        </div>
    )
}

export default EditProfile