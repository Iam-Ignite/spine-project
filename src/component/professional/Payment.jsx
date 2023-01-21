/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { VscClose } from 'react-icons/vsc';
import SideBarDashboard from '../common/sidebarDashboard';

const Payment = () => {
	const [modal, setModal] = useState(false);

	const handlesubmit = (e) => {
		e.preventDefault();
		setModal(true);
	};

	return (
		<div className='relative flex'>
			{/* <!-- NAV --> */}
			<SideBarDashboard />
			{/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
			<main className='flex-1  bg-slate-50 h-screen  py-16'>
				<nav className='py-4 fixed w-full flex ite justify-end top-0 z-50 mx-auto h-20 bg-slate-100 shadow-b'>
					<div className='relative'>
						<input
							type='text'
							className='appearance-none block w-42 ml-24  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							placeholder='Search here '
						/>
						<img
							src='/magnifying-glass.svg'
							className='absolute right-4 top-2'
						alt=',nsa'/>
					</div>
					<img
						src='/notification.svg'
						className='p-2 mr-96 ml-16'
						alt=''
					/>
				</nav>
				<div className='h-full '>
					<div className='mt-10 flex items-center ml-8'>
						<Link
							className='rounded-sm flex items-center px-4 py-1 mx-2 border'
							to='/dashboard'>
							<BiArrowBack className='mx-1' /> GO Back
						</Link>
						<h1 className='text-2xl font-bold fonts'>
							Note to Professional
						</h1>
					</div>
					<div className='px-10 flex flex-col  mx-32 mt-14 items-center justify-center'>
						<form className='w-full py-10 m-auto bg-white px-32'>
							<div className='w-full flex items-center  px-3 mb-5'>
								<label
									class='block w-64 uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
									for='grid-first-name'>
									Headline
								</label>
								<input
									class='appearance-none block w-full fonts bg-slate-100 text-gray-700 text-xs border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
									id='grid-first-name'
									type='text'
									placeholder='Enter the topic of the post'
								/>
							</div>
							<div className='w-full flex items-center mb-6 relative px-3'>
								<label
									class='block w-64 uppercase fonts  tracking-wide font-bold text-gray-700 text-xs  mb-2'
									for='grid-last-name'>
									Number of hours
								</label>
								<select
									class='block appearance-none w-full text-xs fonts border bg-slate-100 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='grid-state'>
									<option>
										Select number of hours you want to hire
										for
									</option>
								</select>
								<div className='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
									<svg
										class='fill-current h-4 w-4'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'>
										<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
									</svg>
								</div>
							</div>
							<div className='w-full flex items-center mb-6  px-3'>
								<label
									class='block uppercase w-64 tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
									for='grid-last-name'>
									Project Name
								</label>
								<input
									class='appearance-none block w-full bg-slate-100 text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500'
									id='grid-last-name'
									type='text'
									placeholder='Enter your project name'
								/>
							</div>
							<div className='w-full flex items-center mb-6  px-3'>
								<label
									class='block uppercase w-64 tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
									for='grid-last-name'>
									Overview
								</label>
								<textarea
									class='appearance-none block w-full bg-slate-100 text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-100 focus:border-gray-500'
									id='grid-last-name'
									type='text'
									rows='4'
									placeholder='Explain what is required of our professional'
								/>
							</div>
							<div className='w-full flex items-center mb-6 px-3'>
								<label
									class='block uppercase w-64 tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
									for='grid-last-name'>
									Add Documents
								</label>
								<input
									class='appearance-none hidden  w-full bg-slate-100 text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
									id='file'
									type='file'
									placeholder='Doe'
								/>
								<label
									htmlFor='file'
									className='appearance-none flex items-center w-full bg-orange-200 text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
									<img
										src='/attach.svg'
										className='h-3 mx-3'
										alt=''
									/>
									Browse files or drag and drop here
								</label>
							</div>

							<div className='flex  ml-44 justify-end'>
								<button
									onClick={handlesubmit}
									className='bg-blue-600 w-full mx-5 text-center py-2 mt-6 px-5 fonts rounded-sm text-white'>
									Make Payment
								</button>
							</div>
						</form>
					</div>

					{/* success modal */}

					<div
						className={`fixed flex inset-0 z-50 items-center justify-center   bg-black bg-opacity-75 modal ${
							modal ? '' : 'hidden'
						}`}>
						<div className='relative max-w-lg px-1 py-4 md:p-4 xl:px-8  bg-white shadow-xl rounded-sm lg:max-w-lg'>
							<VscClose
								onClick={() => setModal(!true)}
								className='ml-auto cursor-pointer text-2xl'
							/>
							<div className=' '>
								<h1 className='m-3 text-lg font-medium fonts'>
									Select payment channel
								</h1>

								<div className='my-7 mx-3'>
									<p className='py-3 text-sm fonts text-gray-700'>
										Expected Amount
									</p>
									<b className='border border-blue-400  rounded-sm px-3 py-1 text-blue-600 bg-blue-100'>
										N250,000.00
									</b>
								</div>

								<div className=''>
									<p className='py-4 text-sm fonts text-gray-700'>
										Choose how you want to make payment
									</p>
									<div className='flex'>
										<div className='mb-8 mr-3'>
											<input
												type='radio'
												id='Interswitch'
												name='radio-group'
											/>
											<label
												className=' text-sm fonts text-gray-700'
												for='Interswitch'>
												Interswitch
											</label>
										</div>
										<div className='mb-8 mx-3'>
											<input
												type='radio'
												id='Paypal'
												name='radio-group'
											/>
											<label
												className=' text-sm fonts text-gray-700'
												for='Paypal'>
												Paypal
											</label>
										</div>
										<div className='mb-8 mx-3'>
											<input
												type='radio'
												id='Spine Wallet'
												name='radio-group'
											/>
											<label
												className=' text-sm fonts text-gray-700'
												for='Spine Wallet'>
												Spine Wallet
											</label>
										</div>
									</div>
								</div>

								<button className='bg-blue-600 w-full  text-center py-2  px-5 fonts rounded-sm text-white'>
									Proceed to pay
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Payment;
