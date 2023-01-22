import React from 'react'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import tableData from './tableData.json';


function TableCard({ filteredName }) {
    return (
        <div className='md:hidden block'>
            {
                tableData.filter(table => table.progress === filteredName).map(table => (
                    <div className='p-5 border w-[90%] bg-[#EEEFF04D] m-5' key={table.id}>
                    	<Popup
									trigger={<button class='text-3xl -mt-4 float-right text-blue-700'>...</button>}
									position='left center'>
									<Link to="/projects/projectview" className='p-2 border bg-white rounded-xl text-sm px-4'>View</Link>
								</Popup>
                        <div className="flex items-center justify-between">
                            <div className="w-2/3">
                                <div className="border-b my-3 pb-3">
                                    <h1 className='text-sm'>{table.clientName}</h1>
                                    <span className='text-xs text-[#8A8888] '>{table.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <span className='text-[#8A8888] text-xs'>Project name</span>
                                       <b>{table.sponsors}</b>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-[#8A8888] text-xs'>Amount</span>
                                        <b>{table.price}</b>
                                    </div>
                                </div>
                            </div>
                            <button className={`px-4  ${table.progress}`}>
                                {table.progress}
                            </button>
                      </div>
                    </div>

                ))
            }

        </div>
    )
}

export default TableCard