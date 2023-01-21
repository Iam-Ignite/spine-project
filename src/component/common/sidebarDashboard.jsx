import { RiAwardFill, RiBarChartBoxFill, RiDashboardFill, RiMessageFill, RiStackFill, RiSuitcaseFill, RiUserFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SideBarDashboard = ({sidebar, setSidebar}) => {

	const navLink = [
		{
			path: '/dashboard',
			title: 'Dashboard',
			icon:<RiDashboardFill/>
		},
		{
			path: '/projects',
			title: 'Projects',
			icon:<RiStackFill />
		},
		{
			path: '/profile',
			title: 'Profile',
			icon:<RiUserFill />
		},
		{
			path: '/myjobs',
			title: 'My Jobs',
			icon:<RiSuitcaseFill />
		},
		{
			path: '/activitylog',
			title: 'Activity Log',
			icon:<RiBarChartBoxFill />
		},
		{
			path: '/professionals',
			title: 'Professionals',
			icon:<RiAwardFill />
		},
		{
			path: '/message',
			title: 'Messages',
			icon:<RiMessageFill />
		}
	
	];

	return (
		<>
			<nav className={`md:fixed z-10 block lg:relative md:bottom-0 bottom-1 fixed  md:w-64 lg:w-64 md:h-screen transition-all duration-300 transform bg-white   sidebar-color overflow-y-scrol translate-x-0 md:translate-x-0 ${sidebar ? "hidden" :"block"}`}>
				<div className='flex flex-col justify-between lg:h-full md:h-full'>
					<div className='md:py-8'>
						<a
							className=' md:flex-row flex-col hidden md:flex bottom-border3 pb-5 justify-center space-x-4 text-white'
							href='hvhjvjh'>
							<img src='/Logo.svg' className='' alt='' />
						</a>
						{/* <!-- NAV LINKS --> */}
						<div className='py-4 space-y-2  flex justify-center text-gray-400'>
							 						    
							<div className='md:pt-10  justify-evenly flex-wrap gap-2 md:w-full md:mx-8 overflow-x-auto  flex md:block'>
								{/* <!-- BASIC LINK --> */}
								{navLink.map((item, key) => (
									<Link
										key={key}
										to={item.path}
										className={`py-1.5 md:px-4 md:flex items-center mb-0  flex flex-col  md:items-start md:mb-5   md:text-white  text-sm md:text-sm font-light fonts md:space-x-2   ${
											window.location.pathname === item.path
												? 'sidemenu text-[#2E5BFF]'
												: ''
										}`}>
											<b className="md:hidden block text-center text-base">{item.icon}</b>
											<span>{item.title}</span>
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* <!-- all --> */}
					<div className='bottom-border4 pb-5 hidden md:block'>
						<div className=''>
							<p className='pt-4 px-14 ml-28 md:ml-0 lg:ml-0 flex items-center mb-5 text-white text-sm font-light fonts space-x-2 '>
								Logout
							</p>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SideBarDashboard;
