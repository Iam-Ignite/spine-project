import React from 'react'

function Qualitifaction() {
    return (
        <div className='w-full h-auto md:p-10 p-5 bg-white border'>
            <h1 className='font-sans text-lg font-medium mx-2'>Qualitifaction</h1>
            <form className='py-10'>
                <div className='grid grid-cols-1'>
                    <div className='w-full md:flex justify-between md:mb-6 relative px-3'>
                        <label
                            className='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
                            for='grid-last-name'>
                            Qualification
                        </label>
                        <select
                            className='block appearance-none text-xs  fonts w-full md:w-3/4 border bg-[#F4F4F4] border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-state'>
                            <option>
                                Select Qualification
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
                    <div className='w-full md:flex justify-between mt-5 md:mb-6 px-3'>
                        <label
                            className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                            for='grid-last-name'>
                            Institution
                        </label>
                        <input
                            className='appearance-none block w-full md:w-3/4 mb-4 text-xs bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id='grid-last-name'
                            type='text'
                            placeholder='University of Lagos'
                        />
                    </div>
                </div>
                <div className='w-full md:flex justify-between px-3  md:mb-6'>
                    <label
                        className='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
                        for='grid-first-name'>
                        Address
                    </label>
                    <input
                        className='appearance-none block w-full md:w-3/4 text-xs bg-[#F4F4F4] text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        id='grid-first-name'
                        type='text'
                        placeholder='Enter address'
                    />
                </div>
                <div className="md:flex md:w-3/5 md:ml-5 md:mx-0 mx-4 items-end flex-col">

                    <button className='bg-blue-100 py-2 w-full md:w-auto px-5 rounded-sm text-blue-600'>
                        <span className='border text-xs mx-2 fonts rounded-full px-1  border-blue-600'>
                            +
                        </span>
                        Add another qualification
                    </button>
                </div>
                    <button className='bg-blue-600 fonts w-[92%] md:w-auto mx-4 md:mx-0 md:ml-[11.5rem] py-2 mt-6 px-5 rounded-sm text-white'>
                        Save
                    </button>

            </form>
        </div>
    )
}

export default Qualitifaction