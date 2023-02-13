/** @format */

import { useState } from 'react';
import {
	BiMenuAltLeft,
	BiChevronRight,
} from 'react-icons/bi';
import ProCard from '../component/professional/ProCard';
import Filter from '../component/professional/Filter';
import ProDetails from '../component/professional/ProDetails';

const Professsionals = () => {
	const [modalFilter, setModalFilter] = useState(false);
	const [modalDetails, setModalDetails] = useState(false);

	return (
		<>
			<div className='flex mt-5 md:ml-14  items-center'>
				<button
					onClick={() => setModalFilter(!false)}
					className='flex items-center  mr-6 fonts appearance-none md:w-48  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
					<BiMenuAltLeft className='md:mr-3' />{' '}
					<span className='hidden md:block'>Filter by</span>
					<BiChevronRight className='ml-4 hidden  md:block' />
				</button>
				<div className='relative md:w-2/5 w-full'>
					<input
						type='text'
						className='appearance-none block md:w-42 w-full  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
			<div className='flex md:flex-row px-5 lg:flex-row flex-col-reverse '>
				{!modalFilter ? (
					<div
						className={`md:grid grid-cols-1 lg:grid gap-3 ${
							!modalDetails
								? 'md:grid-cols-3 lg:grid-cols-3  '
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
						className={`grid grid-cols-1 gap-3 grid-cols-${
							!modalFilter ? '3' : '2'
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
					<ProDetails setModalDetails={setModalDetails} />
				)}
			</div>
		</>
	);
};

export default Professsionals;
