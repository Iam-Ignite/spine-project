import React from 'react'

function Security() {
    return (
        <div className='w-full h-auto md:p-10 p-5 bg-white border'>
            <h1 className='font-sans text-lg font-medium mx-2'>Change Password</h1>
            <form className='py-10'>
                <div className='w-full md:flex justify-between items-center px-3  md:mb-6'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        for='grid-first-name'>
                        Enter old password
                    </label>
                    <input
                        className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        id='grid-first-name'
                        type='password'
                        placeholder='Enter old password'
                    />
                </div>
                <div className='w-full md:flex justify-between items-center px-3  md:mb-6'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        for='grid-first-name'>
                        Enter new password
                    </label>
                    <input
                        className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        id='grid-first-name'
                        type='password'
                        placeholder='Enter new password'
                    />
                </div>
                <div className='w-full md:flex justify-between items-center px-3  md:mb-6'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        for='grid-first-name'>
                        Confirm password
                    </label>
                    <input
                        className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        id='grid-first-name'
                        type='password'
                        placeholder='Confirm password'
                    />
                </div>


                <button className='bg-blue-600 fonts w-[92%] md:w-auto mx-4 md:mx-0 md:ml-[11.5rem] py-2 mt-6 px-5 rounded-sm text-white'>
                    Change password
                </button>

            </form>
        </div>
    )
}

export default Security