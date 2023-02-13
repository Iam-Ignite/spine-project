import React from 'react'

// fixed flex inset-0 z-50 items-center justify-center px-5   bg-black bg-opacity-75 modal 

export default function AddJob({ modal }) {
    return (
        <div
            className={` fixed  flex inset-0 items-center overflow-y-auto pt-32 pb-32 z-50 w-screen justify-center h-screen  bg-black bg-opacity-75 ${modal ? '' : 'hidden'
                }`}>
            <div className='relative w-2/4 px-3 py-4  bg-white shadow-xl rounded-xl'>
            <h1 className='text-lg ml-8 mb-2'>Post a job</h1>
                <form class='w-full px-5'>

                    <div class='grid grid-cols-2 -mx-3 mb-6'>
                        <div class='w-full  '>
                            <label
                                class='block uppercase text-xs tracking-wide fonts font-normal text-gray-800 t mb-2'
                                for='grid-last-name'>
                                Enter Job title
                            </label>
                            <input
                                class='appearance-none block w-full bg-white text-xs text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                id='grid-last-name'
                                type='text'
                                placeholder='Enter the job title'
                            />
                        </div>
                        <div class='w-full  ml-2'>
                            <label
                                class='block uppercase text-xs tracking-wide fonts font-bold text-gray-800 t mb-2'
                                for='grid-last-name'>
                                Duration
                            </label>
                            <input
                                class='appearance-none block w-full text-xs bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                id='grid-last-name'
                                type='text'
                                placeholder='Select state'
                            />
                        </div>
                    </div>

                    <div class='grid grid-cols-2 -mx-3 mb-6'>
                        <div className="w-full flex items-end">
                            <div class='w-4/5'>
                                <label
                                    class='block uppercase text-xs tracking-wide fonts font-bold text-gray-800 t mb-2'
                                    for='grid-last-name'>
                                    Rate
                                </label>
                                <input
                                    class='appearance-none block w-full bg-white text-gray-700 border border-r-0 border-gray-200 rounded-l text-xs py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    id='grid-last-name'
                                    type='text'
                                    placeholder='Enter amount'
                                />
                            </div>
                            <div class='w-2/5 relative'>
                                <select
                                    class='block text-xs text-gray-400 appearance-none w-full fonts border border-l-0 border-gray-200  py-3 px-2 rounded-r leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    id='grid-state'>
                                    <option>Hourly</option>
                                </select>
                                <div class='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                    <svg
                                        class='fill-current h-4 w-4'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'>
                                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class='w-full ml-2'>
                            <label
                                class='block uppercase text-xs tracking-wide fonts font-bold text-gray-800 t mb-2'
                                for='grid-last-name'>
                                Experience
                            </label>
                            <input
                                class='appearance-none block w-full text-xs bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                id='grid-last-name'
                                type='text'
                                placeholder='Enter level experience'
                            />
                        </div>


                    </div>
                    <div class='grid grid-cols-1 -mx-3 mb-6'>
                        <div class='w-full relative'>
                            <label
                                class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                                for='grid-last-name'>
                                Skills
                            </label>
                            <select
                                class='block appearance-none text-xs w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                id='grid-state'>
                                <option>Select skills</option>
                            </select>
                            <div class='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
                                <svg
                                    class='fill-current h-4 w-4'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'>
                                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div class='grid grid-cols-1 -mx-3 mb-6'>
                        <div class='w-full  '>
                            <label
                                class='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                                for='grid-last-name'>
                                Job Description
                            </label>
                            <textarea
                                class='appearance-none block w-full text-xs bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                id='grid-last-name'
                                type='text'
                                rows='6'
                                placeholder='Describe what the job is about'
                            />
                        </div>
                    </div>

                  <div className="grid justify-center">
                    <button
                        className='bg-blue-600 fonts text-center  py-2  px-5 rounded-sm text-white'>
                        Post
                    </button>
                  </div>
                </form>
            </div>
        </div>
    )
}
