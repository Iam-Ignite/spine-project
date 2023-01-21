/** @format */

import LoginSideBAr from '../component/common/Loginsidebar';
import { Link } from 'react-router-dom';

const SkillsPage = () => {
	return (
		<>
			<div className=''>
				<div className='flex flex-col space-y-0 md:space-y-0 md:flex-row'>
					<LoginSideBAr bgimage='/sitting.svg' />

					<div className='h-screen lg:ml-auto md:ml-auto md:w-7/12'>
						<div className='container mt-12 py-8'>
							<div className='lg:w-11/12 relative'>
								<div className='sticky md:ml-28 lg:ml-28 ml-12  px-2 top-0 z-40 bg-white w-100'>
									<h3 className='text-3xl mt-5 mb-2 fonts'>
										Set your skills
									</h3>
									<p className='py-1 text-lg mb-10 fonts '>
										What skill set do you have?
									</p>
								</div>

								<div className='mt-5 px-10 flex flex-col items-center justify-center'>
									<form class='w-full md:ml-16 lg:ml-16 lg:px-12 md:px-12'>
										<div class='grid h-52 md:h-32 lg:h-32 grid-cols-4 px-3 -mx-3 lg:mb-6 md:mb-6'>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
											<div class='w-full  px-3 mb-6 md:mb-0'>
												<label class='containers '>
													<input type='checkbox' />
													<span class='checkmark fonts'>
														Phasellus vehicula
													</span>
												</label>
											</div>
										</div>

										<div class='w-full lg:mt-0 md:mt-10 md:mb-0'>
											<label
												class='block uppercase fonts tracking-wide font-bold text-gray-700 text-sm  mb-2'
												for='grid-first-name'>
												Can't find any? Enter skill here
											</label>
											<input
												class='appearance-none text-xs block w-2/3 bg-white text-gray-700 border rounded py-3 px-4 mb-8 leading-tight focus:outline-none focus:bg-white'
												id='grid-first-name'
												type='text'
												placeholder='Lorem Ipsum'
											/>
										</div>

										<Link to='/experience'>
											<button className='bg-blue-600 py-2 lg:mt-6 md:mt-6 px-5 mx-1 fonts rounded-sm text-white'>
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

export default SkillsPage;
