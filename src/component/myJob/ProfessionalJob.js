import React from 'react'

function ProfessionalJob({setJob}) {
    return (
        <div className='p-4 bg-white my-4 border rounded'>
            <div className='flex justify-end'>
                <p className='text-sm mb-1 text-gray-600'>Posted 11 hours ago</p>
            </div>
            <h1 className='font-sans font-semibold mb-1 text-lg'>Copy Writer for a New Product</h1>
            <div className="flex gap-2 md:gap-6 flex-wrap text-sm text-[#1C252C] my-2">
                <span>Hourly: N 2,500</span>
                <span>Duration: 3 Months</span>
                <span>Experience: Intermediate</span>
            </div>
            <p className='fonts text-sm border-t py-2 border-b text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod ut dui non cursus. Nunc pellentesque cursus dui, vel eleifend velit
            </p>
            <div className="my-2">
                <b className='font-sans font-semibold'>Skills and Expertise</b>
                <div className='my-3 flex gap-2 flex-wrap'>
                    <span className='text-xs  px-4 mr-1 py-2 text-blue-600 rounded-sm bg-blue-100 '>Contenting writing</span>
                    <span className='text-xs  px-4 py-2 text-blue-600 rounded-sm bg-blue-100 '>Story telling</span>
                    <span className='text-xs  px-4 mr-1 py-2 text-blue-600 rounded-sm bg-blue-100 '>Marketing</span>
                    <span className='text-xs  px-4 py-2 text-blue-600 rounded-sm bg-blue-100 '>Creative writing</span>
                </div>
            </div>
            <div className="flex items-center my-2">
                <div className="flex ">
                    <img src="/Mask Group 8.svg" alt="" className='rounded-full h-6' />
                    <img src="/Mask Group 8.svg" alt="" className='rounded-full h-6' />
                    <img src="/Mask Group 8.svg" alt="" className='rounded-full h-6' />
                    <img src="/Mask Group 8.svg" alt="" className='rounded-full h-6' />

                </div>
                <h3 className='text-base font-sans px-4 py-1 font-normal text-blue-600  '>20 Applicant</h3></div>

            <button onClick={() => setJob(true)}  className='text-[#fff] font-light bg-[#2E5BFF] fonts rounded text-sm px-8 mt-2 py-2'>View Applicant</button>
        </div>
    )
}

export default ProfessionalJob