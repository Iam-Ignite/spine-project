/** @format */

import { useState } from 'react';
import SideBarDashboard from '../component/common/sidebarDashboard';
import {
	BiMenuAltLeft,
	BiChevronRight,
} from 'react-icons/bi';
import ProCard from '../component/professional/ProCard';
import Filter from '../component/professional/Filter';
import ProDetails from '../component/professional/ProDetails';
import NavBar from '../component/common/NavBar';

const Professsionals = () => {
	const [modalFilter, setModalFilter] = useState(false);
	const [modalDetails, setModalDetails] = useState(false);


	return (
		<div className='relative flex'>
			{/* <!-- NAV --> */}
			<SideBarDashboard
				
			/>
			{/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
			<main className='flex-1  bg-[#FBFCFD] h-screen pb-44 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
				<NavBar/>
				<div className='mt-10 mx-10'>
					<h1 className='fonts font-bold text-2xl'>
						Get Professionals
					</h1>
					<div className='flex mt-4 items-center'>
						<button
							onClick={() => setModalFilter(!false)}
							className='flex items-center  mr-6 fonts appearance-none w-48  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
							<BiMenuAltLeft className='mr-2' /> Filter by{' '}
							<BiChevronRight className='ml-14' />
						</button>
						<div className='relative w-52'>
							<input
								type='text'
								className='appearance-none block w-42  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								placeholder='Search here '
							/>
							<img
								src='/magnifying-glass.svg'
								className='absolute right-4 top-2'
								alt=''
							/>
						</div>
					</div>

					{/* Card professionals */}
					<div className='flex md:flex-row lg:flex-row flex-col-reverse '>
						{!modalFilter ? (
							<div
								className={`md:grid lg:grid gap-3 ${
									!modalDetails
										? 'md:grid-cols-4 lg:grid-cols-4  '
										: 'md:grid-cols-2 lg:grid-cols-2 '
								}`}>
								<ProCard
									imge='/Mask Group 10.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 9.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 7.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 8.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 5.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 3.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 6.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 5.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 3.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 6.svg'
									setModalDetails={setModalDetails}
								/>
							</div>
						) : (
							<div
								className={`grid gap-3 grid-cols-${
									!modalFilter ? '4' : '2'
								}`}>
								<ProCard
									imge='/Mask Group 10.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 9.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 7.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 8.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 5.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 3.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 6.svg'
									setModalDetails={setModalDetails}
								/>{' '}
								<ProCard
									imge='/Mask Group 10.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 9.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 7.svg'
									setModalDetails={setModalDetails}
								/>
								<ProCard
									imge='/Mask Group 8.svg'
									setModalDetails={setModalDetails}
								/>
							</div>
						)}
						{!modalDetails ? (
							<>
								{!modalFilter ? (
									''
								) : (
									<Filter setModalFilter={setModalFilter} />
								)}
							</>
						) : (
							<ProDetails
								setModalDetails={setModalDetails}
							/>
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Professsionals;
