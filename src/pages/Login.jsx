/** @format */

import { Link } from 'react-router-dom';
import LoginSideBAr from '../component/common/Loginsidebar';

const Login = () => {
	return (
		<>
			<div className=''>
				<div className='block m-auto md:flex lg:flex md:flex-col lg:flex-col  md:-full lg:w-full space-y-0 md:space-y-0 '>
					<LoginSideBAr bgimage='/star.svg' />

					<div className='h-screen w-96 md:ml-auto  lg:ml-auto md:w-7/12'>
						<div className='container pb-24 mt-12 py-8'>
							<div className='lg:w-11/12 relative'>
								<div className='sticky ml-12 md:ml-28 lg:ml-28 px-2 top-0 z-40 bg-white w-96'>
									<h3 className='text-3xl  fonts mt-5 mb-2 fonts'>
										Hello there,
									</h3>
									<p className='py-1 text-base mb-5 fonts text-neutral'>
										Create a good bio for your client to see{' '}
									</p>
								</div>

								<div className='mt-5 px-2 lg:px-10 md:px-10 flex flex-col items-center justify-center'>
									<form class='md:w-full lg:w-full m-auto md:m-0 lg:m-0 w-screen md:ml-16 lg:ml-16 ml-0 px-12'>
										<div class='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 -mx-3 mb-0 lg:mb-6 md:mb-4'>
											<div class='w-full  px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-first-name'>
													First Name
												</label>
												<input
													class='appearance-none block w-full fonts bg-white text-gray-700 text-xs border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'
													id='grid-first-name'
													type='text'
													placeholder='Jane'
												/>
											</div>
											<div class='w-full mb-4 md:mb-0 px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-last-name'>
													Last Name
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-last-name'
													type='text'
													placeholder='Last Name'
												/>
											</div>
										</div>
										<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 -mx-3 mb-0 lg:mb-6 md:mb-6'>
											<div class='w-full  px-3 mb-3 md:mb-0 '>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-first-name'>
													Email address
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 text-xs border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'
													id='grid-first-kname'
													type='text'
													placeholder='Email address'
												/>
											</div>
											<div class='w-full  px-3 mb-3 md:mb-0'>
												<label
													class='block uppercase tracking-wide font-bold fonts text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-firskt-name'>
													Phone number
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 text-xs border rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white'
													id='grid-first-name'
													type='number'
													placeholder='+ (234) - 90 989 948 66'
												/>
											</div>
										</div>

										<div class='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 -mx-3 mb-0 lg:mb-6 md:mb-6'>
											<div class='w-full relative mb-3 md:mb-6 px-3'>
												<label
													class='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-last-kname'>
													What Service do you offer?
												</label>
												<select
													class='block appearance-none w-full text-xs fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-state'>
													<option>Finance</option>
												</select>
												<div class='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
													<svg
														class='fill-current h-4 w-4'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 20 20'>
														<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
													</svg>
												</div>
											</div>
											<div class='w-full relative mb-3 md:mb-6 px-3'>
												<label
													class='block uppercase fonts tracking-wide font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-last-nakme'>
													Level of Experience
												</label>
												<select
													class='block appearance-none w-full text-xs fonts border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-state'>
													<option>
														Select level of experience
													</option>
												</select>
												<div class='pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700'>
													<svg
														class='fill-current h-4 w-4'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 20 20'>
														<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
													</svg>
												</div>
											</div>
											<div class='w-full mb-3 md:mb-0  px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grid-lammst-name'>
													Password
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='grid-last-name'
													type='password'
													placeholder='Password'
												/>
											</div>
											<div class='w-full mb-3 md:-0 px-3'>
												<label
													class='block uppercase tracking-wide fonts font-bold text-gray-700 text-xs mb-1 lg:mb-2 md:mb-2'
													htmlFor='grkkid-last-name'>
													Confirm password
												</label>
												<input
													class='appearance-none block w-full bg-white text-gray-700 text-xs border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
													id='gkkrid-last-name'
													type='password'
													placeholder='Confirm password'
												/>
											</div>
										</div>
										<Link to='/final'>
											<button className='bg-blue-600 py-2 mt-3 w-full md:w-auto px-5 fonts rounded-sm text-white'>
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

export default Login;
