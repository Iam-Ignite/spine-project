import Chart from '../component/common/PieChart';

const ChartDetailBox = () => {
	return (
		<div className='mt-5 py-6 bg-slate-100 border lg:px-10 px-2 w-full md:w-auto lg:w-auto  md:px-10'>
			<h1 className='md:text-center text-lg ml-7  fonts '>
				Project status Statistics
			</h1>
			<div className='flex flex-col md:flex-row lg:flex-row fonts  md:h-60 lg:h-60 px-4 py-8 items-center'>
				<div
					className='relative'
					style={{
						position: 'relative',
						left: '-40px',
						top: '-50px',
					}}
				>
					<Chart />
					<div className='absolute top-[187px] left-[47%]'>
					<p className='text-[#2E5BFF] font-bold text-[18px]'>2,500</p>
					<p className='text-[11px] ml-1 text-[#2E5BFF]'>Projects</p>
					</div>
				</div>
				<div
					style={{
						width: '220px',
					}}>
					<div className='flex fonts justify-between'>
						<label className='flex fonts mb-3 fonts'>
							<img
								className='mx-4'
								src='/green.svg'
								alt='logo'
							/>
							In progress
						</label>
						<p>700</p>
					</div>
					<div className='flex fonts justify-between'>
						<label className='flex fonts mb-3'>
							<img
								className='mx-4'
								src='/orange.svg'
								alt='logo'
							/>
							Pending
						</label>
						<p>700</p>
					</div>
					<div className='flex fonts items-center justify-between'>
						<label className='flex fonts mb-3'>
							<img
								className='mx-4'
								src='/blue2.svg'
								alt='logo'
							/>
							Completed
						</label>
						<p>700</p>
					</div>
					<div className='flex fonts justify-between'>
						<label className='flex fonts mb-3'>
							<img
								className='mx-4'
								src='/red.svg'
								alt='logo'
							/>
							Overdue
						</label>
						<p>700</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChartDetailBox;
