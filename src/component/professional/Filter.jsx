import React from 'react';
import { GrClose } from "react-icons/gr";

function Filter({setModalFilter}) {
	return (
       <>
		<div className='w-full h-full bg-white my-4 rounded relative md:mx-4 border px-10 py-10'>
        <GrClose onClick={() => setModalFilter(false)} className='text-blue-600 cursor-pointer absolute right-10 top-5'/>
			<h1 className='fonts text-lg font-medium mb-5'>
				Experience Level
			</h1>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Beginner
				</label>
			</div>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Intermediate
				</label>
			</div>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Expert
				</label>
			</div>

			<h1 className='fonts text-lg font-medium my-5'>
				Rate Range
			</h1>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					N50,000 - N80,000
				</label>
			</div>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					N80,000 - N120,000
				</label>
			</div>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					N80,000 - N120,000
				</label>
			</div>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					N180,000 - N200,000
				</label>
			</div>

			<h1 className='fonts text-lg font-medium my-5'>
				Academic Qualification
			</h1>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Beginner
				</label>
			</div>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Intermediate
				</label>
			</div>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Expert
				</label>
			</div>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Beginner
				</label>
			</div>
			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Intermediate
				</label>
			</div>

			<div className='flex my-2 items-center'>
				<input
					id='checkbox-table-1'
					type='checkbox'
					className='w-4 mx-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
				/>
				<label
					for='checkbox-table-1'
					className='text-gray-500 mx-1'>
					Expert
				</label>
			</div>
			<button className='text-white bg-blue-600 fonts rounded-sm text-lg px-8 mt-4 py-1'>
				Apply
			</button>
		</div>
       </>
	);
}

export default Filter;
