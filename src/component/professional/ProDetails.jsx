import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function ProDetails({ setModalDetails }) {
	return (
		<>
			<div className='w-full h-full bg-white my-4 rounded relative md:mx-4 border px-10 py-10'>
				<GrClose
					onClick={() => setModalDetails(false)}
					className='text-blue-600 cursor-pointer absolute right-10 top-5'
				/>
				<div className='flex items-center'>
					<img src='/Mask Group 5.svg' alt='icom' />
					<div className='mx-4'>
						<h1 className='fonts py-1 mb-0 text-lg'>
							Accountant
						</h1>
						<p className='underline text-blue-500'>
							sherifolatomiwa@gmail.com
						</p>
					</div>
				</div>

				<div className='border flex rounded-sm my-7'>
					<div className='px-3 text-center w-full  py-3'>
						<p className='fonts text-xs mb-0 text-gray-500'>
							Work Level
						</p>
						<b className='fonts text-xs mb-0 text-gray-600'>
							Expert
						</b>
					</div>
					<div className='px-3 text-center w-full blr py-3'>
						<p className='fonts text-xs mb-0 text-gray-500'>
							Years of Experience
						</p>
						<b className='fonts text-xs mb-0 text-gray-600'>
							5 years
						</b>
					</div>
					<div className='px-3 text-center w-full  py-3'>
						<p className='fonts text-xs mb-0 text-gray-500'>
							Hourly Rate
						</p>
						<b className='fonts text-xs mb-0 text-gray-600'>
							N40,000
						</b>
					</div>
				</div>
				<h1 className='fonts text-sm mb-2 font-bold'>
					Overview
				</h1>
				<p className='fonts text-sm text-gray-700'>
					I am a well grounded accountant with compelling
					and elegant financial skills That helps solve
					really complex prob…
				</p>
				<h1 className='fonts text-sm my-4 mt-4 font-bold'>
					Academic Qualification
				</h1>

				<div className='grid grid-cols-3 gap-3'>
					<div className='flex items-center'>
						<input
							id='checkbox-table-1'
							type='checkbox'
							className='w-4 h-4 text-black bg-gray-100 border-gray-300 rounded '
						/>
						<label
							htmlFor='checkbox-table-1'
							className='text-gray-600 mx-3 text-xs fonts'>
							Intermediate
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
							Intermediate
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
							Intermediate
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
							Intermediate
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
							Intermediate
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
							Intermediate
						</label>
					</div>
				</div>
				<Link to='/payment'>
					<button className='text-white bg-blue-600 fonts rounded-sm text-sm px-8 mt-5 lg::ml-80 w-32 md:ml-80 py-1'>
						Hire
					</button>
				</Link>
			</div>
		</>
	);
}

export default ProDetails;
