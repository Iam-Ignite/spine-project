import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'

export default function MessageList({ setIsWidth }) {
    return (
        <div className="md:border h-[80vh] overflow-y-scroll mx-4 md:bg-white md:p-5 py-0 md:w-2/3 md:mr-6">
            <div className='flex items-center border-b pb-6 pt-3'>
                <button
                    className='flex items-center fonts mr-5 appearance-none md:w-auto  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
                    <BiMenuAltLeft className='md:mr-2' /> <span className="hidden md:block">Filter</span>
                </button>
                <div className='relative w-full'>
                    <input
                        type='text'
                        className='appearance-none block md:w-42 w-full  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        placeholder='Search here '
                    />
                    <img
                        src='/magnifying-glass.svg'
                        className='absolute right-4 top-2'
                        alt=''
                    />
                </div>
            </div>
            <div onClick={() => setIsWidth(!true)} className="flex items-center border-b py-4" >
                <img src="/blue.svg" alt="" className='h-16' />
                <div className="ml-4">
                    <b className='text-[#2E5BFF]'>Maryann Tosin</b>
                    <p className="text-sm text-gray-600">The Business Analyst is an agent of change. Business Analysis is a disciplined approach</p>
                </div>
            </div>

            <div onClick={() => setIsWidth(!true)} className="flex items-center border-b py-4" >
                <img src="/blue.svg" alt="" className='h-16' />
                <div className="ml-4">
                    <b className='text-gray-600'>Maryann Tosin</b>
                    <p className="text-sm text-gray-600">The Business Analyst is an agent of change. Business Analysis is a disciplined approach</p>
                </div>
            </div>
            <div onClick={() => setIsWidth(!true)} className="flex items-center border-b py-4" >
                <img src="/blue.svg" alt="" className='h-16' />
                <div className="ml-4">
                    <b className='text-gray-600'>Maryann Tosin</b>
                    <p className="text-sm text-gray-600">The Business Analyst is an agent of change. Business Analysis is a disciplined approach</p>
                </div>
            </div>
        </div>
    )
}
