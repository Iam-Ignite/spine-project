/** @format */

import React from 'react';
import tableData from './tableData.json';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const DashTable = ({filteredName}) => {
	return (
		<div className='relative overflow-x-auto my-5 mx-16 border hidden md:block'>
			<table className='w-full text-sm text-left text-gray-500 '>
				<thead className='text-xs bg-slate-100 text-gray-700 px-5 fonts uppercase '>
					<tr>
						<th scope='col' className='py-4 px-5'>
							<div className='flex items-center'>
								<input
									id='checkbox-all'
									type='checkbox'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
								/>
								<label
									htmlFor='checkbox-all'
									className='sr-only fonts'>
									checkbox
								</label>
							</div>
						</th>
						<th
							scope='col'
							className='px-2 py-4 fonts uppercase'>
							Client name
						</th>
						<th
							scope='col'
							className='px-2 py-4 fonts uppercase'>
							Email Address
						</th>
						<th
							scope='col'
							className='px-2 py-4 fonts uppercase'>
							Project Name
						</th>
						<th
							scope='col'
							className='px-2 py-4 fonts uppercase'>
							AMOUNT
						</th>
						<th
							scope='col'
							className='px-2 py-4 fonts uppercase'>
							Status
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{tableData.filter(table => table.progress === filteredName).map((table) => (
						<tr
							key={table.id}
							className='bg-white border-b hover:bg-gray-50 '>
							<td className='w-4 p-4'>
								<div className='flex items-center'>
									<input
										id='checkbox-table-1'
										type='checkbox'
										className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded '
									/>
									<label
										htmlFor='checkbox-table-1'
										className='sr-only'>
										checkbox
									</label>
								</div>
							</td>
							<th
								scope='row'
								className='p-2 fonts fonts font-medium md:px-2 md:py-4 whitespace-nowrap'>
								{table.clientName}
							</th>
							<td className='p-2 fonts text-center md:px-2 md:py-4'>
								{table.email}
							</td>
							<td className='p-2 fonts md:px-2 md:py-4'>
								{table.sponsors}
							</td>
							<td className='p-2 fonts md:px-2 md:py-4'>
								{table.price}
							</td>
							<td className='p-2 fonts md:px-2 md:py-4 '>
								<button className={`px-4 text-green-600 ${table.progress}`}>
									{table.progress}
								</button>
							</td>
							<td className='p-2 fonts md:px-2 md:py-4'>
								
								<Popup
									trigger={<button class='text-xl'>...</button>}
									position='right center'>
									<Link to="/projects/projectview" className='p-2 border bg-white rounded-xl text-sm px-4'>View</Link>
								</Popup>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashTable;
