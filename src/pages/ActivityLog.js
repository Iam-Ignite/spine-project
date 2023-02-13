import React, { useState } from 'react'
import {  PendingPayment, WorkinProgress, WorkinReview } from '../component/activitylog/ActivityLogTabs';
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'

function ActivityLog() {
    const [tabName, setTabName] = useState("Progress")

      	const profileTabs = () => {
		switch (tabName) {
			case 'Progress':
				return <WorkinProgress />;
			case 'Review':
				return <WorkinReview />;
			case 'Pending':
				return <PendingPayment />;
			
		

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
            <main className='flex-1  bg-[#FBFCFD] h-screen pb-44 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />

                <div className='w-full grid grid-cols-2 gap-4 items-center md:grid-cols-4 pt-8 px-5 mt-5 md:px-16'>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Work Outsourced (4)</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 200.00</b>
                    </div>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Work in Review (3)</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 150.00</b>
                    </div>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Pending Payment (2)</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 150.00</b>
                    </div>

                </div>
                <div className="mb-4  md:mx-2">
                    <div className="border-b ml-5 pl-5  mx- ">
                        <ul className='md:flex flex ml-4 md:w-2/5 mb-0 mr-14 md:mr-0 md:mx-0 items-center mt-2 justify-between'>
                            <li><button onClick={() => setTabName("Progress")} className={`${tabName === "Progress" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Work Outsourced</button></li>
                            <li><button onClick={() => setTabName("Review")} className={`${tabName === "Review" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Work in Review</button></li>
                            <li><button onClick={() => setTabName("Pending")} className={`${tabName === "Pending" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Pending Payment</button></li>
                        </ul>
                    </div>
                </div>
                {profileTabs()}
               
            </main>
        </div>
    )
}

export default ActivityLog