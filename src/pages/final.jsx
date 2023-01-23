/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginSideBAr from '../component/common/Loginsidebar';

const Final = () => {
	const [modal, setModal] = useState(false);

	const handlesubmit = (e) => {
		e.preventDefault();
		setModal(true);
	};

	return (
		<>
			<div className=''>
				<div className='flex flex-col space-y-0 md:space-y-0 md:flex-row'>
					<LoginSideBAr bgimage='/star.svg' />

					<div className='h-screen pb-16 ml-auto md:w-7/12'>
						<div className='container mt-12 py-8'>
							<div className='lg:w-11/12 relative'>
								<div className='sticky ml-6 md:ml-28 lg:ml-28 px-2 top-0 z-40 bg-white w-96'>
									<h3 className='text-3xl mt-5 mb-2 fonts'>
										Almost done.
									</h3>
									<p className='py-1 text-base fonts mb-10 fonts text-neutral'>
										Create a good bio for your client to see
									</p>
								</div>

								<div className='mt-5 h-min px-6 mr-4 md:mr-0 flex overflow-y-auto flex-col items-center justify-center'>
									<form className='w-full pb-44 md:pb-16 lg:pb-16 md:ml-16 lg:ml-16 md:px-12 lg:px-12'>
										<label
											className='cursor-pointer'
											htmlFor='file'>
											<div className='flex items-end mb-4'>
												<div className='bg-orange-100 border  p-2 rounded-md'>
													<img
														src='/image icon.svg'
														alt=''
													/>
												</div>

												<p className='text-sm mx-2'>
													Click to upload profile picture
												</p>
											</div>
											<input
												type='file'
												name='file'
												id='file'
												className='hidden'
											/>
										</label>
										<div className='grid md:grid-cols-2 gap-4 md:gap-0 -mx-3 mb-6'>
											<div className='w-full relative px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grid-last-namese'>
													Country
												</label>
												<select
													class='block appearance-none text-xs w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-statewfr'>
													<option>Select Country</option>
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
											<div className='w-full  px-3'>
												<label
													class='block uppercase text-xs tracking-wide fonts font-bold text-gray-700 t mb-2'
													htmlFor='grid-last-nrfeframe'>
													Address
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-last-refrename'
													type='text'
													placeholder=''
												/>
											</div>
										</div>
										<div className='grid md:grid-cols-2 gap-4 md:gap-0 -mx-3 mb-6'>
											<div className='w-full relative px-3'>
												<label
													class='block uppercase tracking-wide fonts text-xs font-bold text-gray-700 mb-2'
													htmlFor='grid-last-rgevrqrqfname'>
													State
												</label>
												<select
													class='block appearance-none w-full fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-starefefqte'>
													<option>Select State</option>
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

											<div className='w-full relative px-3'>
												<label
													class='block uppercase tracking-wide font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grierrrefrd-last-name'>
													City
												</label>
												<select
													class='block appearance-none fonts text-xs w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-sreferftate'>
													<option>Select City</option>
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
										</div>
										<div className='grid grid-cols-1 -mx-3 mb-6'>
											<div className='w-full  px-3'>
												<label
													class='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grid-refreflast-name'>
													Professional Overview
												</label>
												<textarea
													class='appearance-none block w-full text-xs bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-last-name'
													type='text'
													rows='6'
													placeholder='Include your top experiences, skills, interests. This will increase your chances at nailing clients.'
												/>
											</div>
										</div>

										<button
											onClick={handlesubmit}
											className='bg-blue-600 fonts w-full md:w-auto  py-2  px-5 rounded-sm text-white'>
											Continue
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div
						className={`fixed flex inset-0 z-50 items-center justify-center px-5   bg-black bg-opacity-75 modal ${
							modal ? '' : 'hidden'
						}`}>
						<div className='relative max-w-lg px-3 py-4  bg-white shadow-xl rounded-xl lg:max-w-lg'>
							<div className='p-3 text-center md:p-8 xl:px-16'>
								<div className='flex justify-center'>
									<img
										src='/success.svg'
										className='text-center'
										alt=''
										srcSet=''
									/>
								</div>
								<p className='text-lg fonts'>Success!</p>
								<p className='py-3 fonts text-base'>
									You have successfully joined the league of
									professionals
								</p>
								<div className='flex justify-center'>
									<Link
										to='/dashboard'
										className='px-4 py-2 text-base fonts text-white btn bg-auraPrimary rounded-sm bg-blue-600'>
										GET STARTED
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Final;
