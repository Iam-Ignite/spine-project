/** @format */

import { BiDotsHorizontalRounded } from 'react-icons/bi';

const ProCard = ({setModalDetails, imge}) => {
	return (
		<div className='p-5 bg-white my-4 border rounded'>
			<div className='flex justify-between'>
				<img src={imge} alt='icom' />
				<BiDotsHorizontalRounded />
			</div>
			<h1 className='fonts py-2  text-lg'>Accountant</h1>
			<p className='fonts text-sm text-gray-700'>
				I am a well grounded accountant with compelling and
				elegant financial skills That helps solve really
				complex prob…
			</p>
			<div className='my-3'>
				<span className='text-xs px-4 mr-1 py-2 text-blue-600 rounded-sm bg-blue-100 '>Senior level</span>
				<span className='text-xs px-4 py-2 text-blue-600 rounded-sm bg-blue-100 '>1 yr experience</span>
			</div>
			<button onClick={() => setModalDetails(!false)} className='text-white bg-blue-600 fonts rounded-sm text-sm px-8 mt-2 py-1'>Hire</button>
		</div>
	);
};

export default ProCard;
