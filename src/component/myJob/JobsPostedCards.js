import React from 'react'
import { Link } from 'react-router-dom'

function JobsPostedCards({setJob}) {
    return (
   <div className='w-full h-full bg-white my-4 rounded relative mx-4 border px-4'>
				
				<div className='flex items-center pt-4'>
					<img src='/Mask Group 5.svg' alt='icom' />
					<div className='mx-4'>
						<h1 className='fonts py-1  text-lg'>
							Accountant
						</h1>
						<p className='underline text-blue-500'>
							sherifolatomiwa@gmail.com
						</p>
					</div>
				</div>

				<div className='border flex rounded-sm my-7'>
					<div className='px-2 text-center w-full  py-3'>
						<p className='fonts text-xs mb-2 text-gray-500'>
							Work Level
						</p>
						<b className='fonts text-xs mb-2 text-gray-600'>
							Expert
						</b>
					</div>
					<div className='px-2 text-center w-full blr py-3'>
						<p className='fonts text-xs mb-2 text-gray-500'>
							Years of Experience
						</p>
						<b className='fonts text-xs mb-2 text-gray-600'>
							5 years
						</b>
					</div>
					<div className='px-2 text-center w-full  py-3'>
						<p className='fonts text-xs mb-2 text-gray-500'>
							Hourly Rate
						</p>
						<b className='fonts text-xs text-gray-600'>
							N40,000
						</b>
					</div>
				</div>
				<div className="border p-3 rounded-sm">
                <h1 className='fonts text-sm mb-3 font-bold'>
					Overview
				</h1>
				<p className='fonts text-sm text-gray-700'>
					I am a well grounded accountant with compelling
					and elegant financial skills That helps solve
					really complex prob…
				</p>
                </div>
				

			
				<Link to='/payment'>
					<button className='text-white bg-blue-600 fonts rounded-sm text-base px-8 mt-3  py-1'>
						Hire
					</button>
				</Link>
			</div>
    )
}

export default JobsPostedCards