/** @format */

import React, { useState } from 'react';
import NavBar from '../component/common/NavBar';
import SideBarDashboard from '../component/common/sidebarDashboard';
import BankDetail from '../component/profile/BankDetail';
import EditProfile from '../component/profile/EditProfile';
import ProfileDetail from '../component/profile/ProfileDetail';
import ProfileSidebar from '../component/profile/ProfileSidebar';
import Qualitifaction from '../component/profile/Qualitifaction';
import Security from '../component/profile/Security';
import SetRate from '../component/profile/SetRate';
import Skills from '../component/profile/Skills';

function Profile() {
	const [tabName, setTabName] = useState('profiledetail');

	const profileTabs = () => {
		switch (tabName) {
			case 'bank':
				return <BankDetail />;
			case 'editprofile':
				return <EditProfile />;
			case 'profiledetail':
				return <ProfileDetail />;
			case 'qualitifaction':
				return <Qualitifaction />;
			case 'security':
				return <Security />;
			case 'skills':
				return <Skills />;
				case 'setrate':
				return <SetRate />;

			default:
				return <h1>No project match</h1>;
		}
	};

	return (
		<div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
			{/* <!-- NAV --> */}
			<SideBarDashboard />
			{/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
			<main className='flex-1  bg-[#FBFCFD] h-screen pb-24 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
				<NavBar />
				<div className='w-full md:flex p-8 px-4 md:px-16'>
					<ProfileSidebar tabName={tabName} setTabName={setTabName} />

					<div className='w-full'>
					 {profileTabs()}
					</div>
				</div>
			</main>
		</div>
	);
}

export default Profile;
