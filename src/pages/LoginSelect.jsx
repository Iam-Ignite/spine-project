/** @format */

import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LoginSideBAr from '../component/common/Loginsidebar';

const LoginSelect = () => {
	return (
		<>
			<div className=''>
				<div className='flex flex-col space-y-0 md:space-y-0 md:flex-row'>
					<LoginSideBAr bgimage='/star.svg' />

					<div className='h-screen ml-auto md:w-7/12'>
						<div className='container mt-12 py-8'>
							<div className='lg:w-11/12 relative'>
								<div className='sticky md:ml-28 lg:ml-28 ml-12 px-2 top-0 z-40 bg-white w-100'>
									<h3 className='text-3xl mt-5 mb-2 fonts'>
										Hello there,
									</h3>
									<p className='py-1 text-lg mb-10 fonts '>
										Hello there, Select which you want to be
									</p>
								</div>

								<div className='mt-5 px-10 block md:flex lg:flex flex-col items-center justify-center'>
									<form className='w-full md:ml-16 lg:ml-16 md:px-12 lg:px-12'>
										<div className='flex items-center border border-gray-300 px-5 py-4 w-96 lg:-2/3 md:w-2/3 rounded justify-between'>
											<div className=''>
												<img
													src='/compay.svg'
													alt='nbfmbds'
												/>
											</div>
											<div className=''>
												<p className='text-blue-700 fonts font-bold'>
													Business
												</p>
												<small className='text-gray-500 fonts'>
													Withdraw using your Bank Details
												</small>
											</div>
											<div className='mb-8'>
												<input
													type='radio'
													id='Beginner'
													name='radio-group'
												/>
												<label htmlFor='Beginner'></label>
											</div>
										</div>

										<div className='flex items-center border my-4 border-gray-300 px-5 py-4 w-96 lg:-2/3 md:w-2/3 rounded justify-between'>
											<div className='bg-[#F6B01933] p-3.5 rounded-full'>
												<BiBriefcaseAlt2 className='text-[#F6B019] text-xl '/>
											</div>
											<div className=''>
												<p className='text-blue-700 fonts font-bold'>
													Professional
												</p>
												<small className='text-gray-500 fonts'>
													Withdraw using your wallet Address
												</small>
											</div>
											<div className='mb-8'>
												<input
													type='radio'
													id='Intermediate'
													name='radio-group'
												/>
												<label htmlFor='Intermediate'></label>
											</div>
										</div>

										<Link to='/login'>
											<button className='bg-blue-600 py-2 w-full md:w-44 mt-6 fonts px-5 md:mx-1 rounded-sm text-white'>
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

export default LoginSelect;
