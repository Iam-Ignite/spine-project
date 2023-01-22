/** @format */

import { Link } from 'react-router-dom';
import LoginSideBAr from '../component/common/Loginsidebar';

const Qualification = () => {
	return (
		<>
			<div className=''>
				<div className='flex flex-col space-y-0 md:space-y-0 md:flex-row'>
					<LoginSideBAr bgimage='/sitting.svg' />

					<div className='h-screen ml-auto md:w-7/12'>
						<div className='container mt-12 py-8'>
							<div className='lg:w-11/12 relative'>
								<div className='sticky ml-12 md:ml-28 lg:ml-28 px-2 top-0 z-40 bg-white w-96'>
									<h3 className='text-3xl mt-5 mb-2 fonts'>
										Qualification
									</h3>
									<p className='py-1 text-base mb-10 fonts text-neutral'>
										Add at least one educational
										qualification
									</p>
								</div>

								<div className='mt-5 h-min px-10 flex overflow-y-auto flex-col items-center justify-center'>
									<form className='w-full pb-44 md:pb-16 lg:pb-16 md:ml-16 lg:ml-16 md:px-12 lg:px-12'>
										<div className='grid grid-cols-2 -mx-3 mb-6'>
											<div className='w-full relative px-3'>
												<label
													class='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grid-last-name'>
													Qualification
												</label>
												<select
													class='block appearance-none text-xs fonts w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-state'>
													<option>
														Select Qualification
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
											<div className='w-full  px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grid-last-namee'>
													Institution
												</label>
												<input
													class='appearance-none block w-full text-xs bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-last-namee'
													type='text'
													placeholder=''
												/>
											</div>
										</div>
										<div className='grid grid-cols-1 -mx-3 mb-6'>
											<div className='w-full  px-3 mb-6 md:mb-0'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs  mb-2'
													htmlFor='grid-first-name'>
													Address
												</label>
												<input
													class='appearance-none block w-full text-xs bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
													id='grid-first-name'
													type='text'
													placeholder='Enter address'
												/>
											</div>
										</div>
										<div className='grid grid-cols-1 -mx-3 lg:mb-6 md:mb-6'>
											<div className='w-full  px-3 mb-6 md:mb-0'>
												<button className='bg-blue-100 py-2   px-5 rounded-sm text-blue-600'>
													<span className='border text-xs mx-2 fonts rounded-full px-1  border-blue-600'>
														+
													</span>
													Add another qualification
												</button>
											</div>
										</div>

										<Link to='/final'>
											<button className='bg-blue-600 fonts py-2 mt-6 px-5 rounded-sm text-white'>
												Continue
											</button>
										</Link>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Qualification;
