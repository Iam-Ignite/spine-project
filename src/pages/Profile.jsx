/** @format */

import React from 'react';
import NavBar from '../component/common/NavBar';
import SideBarDashboard from '../component/common/sidebarDashboard';
import ProfileDetail from '../component/profile/ProfileDetail';


function Profile() {
	
	return (
		<div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
			{/* <!-- NAV --> */}
			<SideBarDashboard />
			{/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
			<main className='flex-1  bg-[#FBFCFD] h-screen pb-24 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
				<NavBar />
				<div className='w-4/5  p-8 px-4 md:ml-5 md:mt-4 md:px-16'>
						<h1 className='text-xl pb-3 font-sans font-medium'>
							User Profile
						</h1>
					<ProfileDetail />
				</div>
			</main>
		</div>
	);
}

export default Profile;
