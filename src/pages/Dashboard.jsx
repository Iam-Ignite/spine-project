/** @format */

import { Link } from 'react-router-dom';
import NavBar from '../component/common/NavBar';
import SideBarDashboard from '../component/common/sidebarDashboard';
import Progresssbar from '../component/utils/Progresssbar';
import Card from '../dashboard/Card';
import ChartDetailBox from '../dashboard/ChartDetailBox';
import DashTable from '../component/projects/dashTable';
import TableCard from '../component/projects/tableCard';

const DashBoard = () => {
	// const [sidebar, setSidebar] = useState(false);

	return (
		<div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
			{/* <!-- NAV --> */}
			<SideBarDashboard />
			{/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
			<main className='flex-1  bg-[#FBFCFD] pb-24 h-screen lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
				<NavBar />
				<div className='flex flex-wrap-reverse mt-8 mx-5 md:ml-12 items-center'>
					<p className='md:ml-5 font-bold'>
						Profile Completion (20%)
					</p>
					<div className='md:w-1/4 my-5 md:mx-4 w-full '>
						<Progresssbar progress='50' />
					</div>
					<Link
						to='/profile'
						className='text-[#2E5BFF] md:ml-5'>
						Click to complete profile
					</Link>
				</div>

				<Card />

				<div className='flex flex-col md:flex-row lg:flex-row mx-5 md:mx-0 justify-between items-center '>
					<ChartDetailBox />
					<div className='mt-10 md:mr-16 lg:mr-16 md:w-full lg:w-full w-full  h-96 md:h-80 overflow-hidden  py-7 border bg-slate-100 px-7'>
						<h1 className='text-center fonts pb-5'>
							Activity Log
						</h1>
						<p className='text-blue-600 fonts text-right'>
							View all notifications
						</p>
						<div className='overflow-y-scroll overflow-x-hidden h-72'>
							<div className='flex w-full fonts justify-between items-end bg-white p-4 rounded-sm mb-4 m-2'>
								<p className='text-sm fonts'>
									5 Transactions are pending review
								</p>
								<label
									htmlFor=''
									className='text-sm fonts text-gray-500'>
									22 Jun 2021
								</label>
							</div>
							<div className='flex w-full justify-between items-end bg-white p-4 rounded-sm mb-4 m-2'>
								<p className='text-sm fonts'>
									5 Transactions are pending review
								</p>
								<label
									htmlFor=''
									className='text-sm fonts text-gray-500'>
									22 Jun 2021
								</label>
							</div>
							<div className='flex w-full justify-between items-end bg-white p-4 rounded-sm mb-4 m-2'>
								<p className='text-sm fonts'>
									5 Transactions are pending review
								</p>
								<label
									htmlFor=''
									className='text-sm fonts text-gray-500'>
									22 Jun 2021
								</label>
							</div>
							<div className='flex w-full justify-between items-end bg-white p-4 rounded-sm mb-4 m-2'>
								<p className='text-sm fonts'>
									5 Transactions are pending review
								</p>
								<label
									htmlFor=''
									className='text-sm fonts text-gray-500'>
									22 Jun 2021
								</label>
							</div>
							<div className='flex w-full justify-between items-end bg-white p-4 rounded-sm mb-4 m-2'>
								<p className='text-sm fonts'>
									5 Transactions are pending review
								</p>
								<label
									htmlFor=''
									className='text-sm fonts text-gray-500'>
									22 Jun 2021
								</label>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h1 className='font-sans text-xl mx-16 my-5'>
						Projects
					</h1>
					<DashTable filteredName='In Progress' />
				</div>
				<TableCard filteredName='In Progress' />
			</main>
		</div>
	);
};

export default DashBoard;
