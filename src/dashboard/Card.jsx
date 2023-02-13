/** @format */

const Card = () => {
	return (
		<>
			<div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-3 md:mx-16 mx-5 mt-2'>
				<div className='bg-blue-600 py-3  rounded-sm'>
					<div className='bottom-border pb-1'>
						<p className='px-4 text-white text-xs'>
							{' '}
							Total Amount Paid Out
						</p>
					</div>
					<div className='py-3'>
						<b className='px-4 text-white text-lg'>
							N12,450,000.50
						</b>
					</div>
				</div>

				<div className='bg-slate-100 py-3  rounded-sm'>
					<div className='border-b pb-1'>
						<p className='px-4 text-black text-xs'>
							Total Projects
						</p>
					</div>
					<div className='flex justify-between items-center px-4'>
						<b className='text-black text-lg py-2 pt-3'>
							333
						</b>
						<img
							src='/Path 335.svg'
							alt='p'
							className='h-5'
						/>
					</div>
                    <br />
					<small className="px-4 text-green-600">25% Less Than Last Month</small>
				</div>
				<div className='bg-slate-100 py-3  rounded-sm'>
					<div className='border-b pb-1'>
						<p className='px-4 text-black text-xs'>
							Pending Projects
						</p>
					</div>
					<div className='pt-3 px-4'>
						<b className='text-black text-lg'>333</b>
						<br />
                        <br />
						<small className="text-green-600">25% Less Than Last Month</small>
					</div>
				</div>

				<div className='bg-slate-100 py-3  rounded-sm'>
					<div className='border-b pb-1'>
						<p className='px-4 text-black text-xs'>
							Overdue Projects
						</p>
					</div>
					<div className='pt-3 px-4'>
						<b className='text-black text-lg'>333</b>
						<br />
                        <br />
						<small className="text-red-600">25% Less Than Last Month</small>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
