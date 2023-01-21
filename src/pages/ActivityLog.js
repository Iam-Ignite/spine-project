import React, { useState } from 'react'
import { AvailablePayment, PendingPayment, WorkinProgress, WorkinReview } from '../component/activitylog/ActivityLogTabs';
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
			case 'Available':
				return <AvailablePayment />;
		

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

                <div className='w-full grid grid-cols-2 gap-4 items-center md:flex pt-8 px-4 mt-5 md:px-16'>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Work in Progress</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 200.00</b>
                    </div>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Work in Review</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 150.00</b>
                    </div>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Pending Payment</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 150.00</b>
                    </div>
                    <div className="bg-white flex flex-col w-full items-center border rounded p-6">
                        <p className='text-sm text-[#707070] mb-2'>Available Payment</p>
                        <b className='font-sans text-[#1C252C] text-lg'>N 150.00</b>
                    </div>

                </div>
                <div className="mb-5 md:mx-16">
                    <div className="border-b  mx-5 12 ">
                        <ul className='md:flex flex md:w-3/5  mr-14 md:mr-0 md:mx-0 items-center mt-2 justify-between'>
                            <li><button onClick={() => setTabName("Progress")} className={`${tabName === "Progress" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Work in Progress</button></li>
                            <li><button onClick={() => setTabName("Review")} className={`${tabName === "Review" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Work in Review</button></li>
                            <li><button onClick={() => setTabName("Pending")} className={`${tabName === "Pending" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Pending Payment</button></li>
                            <li><button onClick={() => setTabName("Available")} className={`${tabName === "Available" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Available Payment</button></li>
                        </ul>
                    </div>
                </div>
                {profileTabs()}
               
            </main>
        </div>
    )
}

export default ActivityLog