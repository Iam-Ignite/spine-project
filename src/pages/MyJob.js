import React, { useState } from 'react'
import { BiChevronRight, BiMenuAltLeft } from 'react-icons/bi'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import { AppliedJobTabs, JobsPostedCardsTab, MyjobsTab } from '../component/myJob/JobTabs';


function MyJob() {
    const [filteredName, setFilteredName] = useState("MyJobs");

    const JobTabs = () => {
        switch (filteredName) {

            case "MyJobs": return <MyjobsTab />;
            case "Appliedjob": return <AppliedJobTabs />;
            case "jobsPosted": return <JobsPostedCardsTab />;

            default: return <h1>No project match</h1>
        }
    }


    return (
        <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] h-screen pb-24 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full'>
                    <div className="mt-8  md:mx-16">
                        <div className="border-b mx-6 mt-4 ">
                            <ul className='md:flex flex md:w-2/5 md:mx-0 w-3/4 items-center mt-2 justify-between'>
                                <li><button onClick={() => setFilteredName("jobsPosted")} className={`text-sm md:text-xl font-medium font-sans text-[#6C757D]   ${filteredName === "jobsPosted" && "h-12  text-[#2E2E2E] font-semibold border-b-2 border-[#2E5BFF] "}`}>Jobs Posted</button></li>
                                <li><button onClick={() => setFilteredName("Appliedjob")} className={`text-sm md:text-xl font-medium font-sans text-[#6C757D]   ${filteredName === "Appliedjob" && "h-12  text-[#2E2E2E] font-semibold border-b-2 border-[#2E5BFF] "}`}>Applied Job</button></li>
                                <li><button onClick={() => setFilteredName("MyJobs")} className={`text-sm md:text-xl font-medium font-sans text-[#6C757D]   ${filteredName === "MyJobs" && "h-12  text-[#2E2E2E] font-semibold border-b-2 border-[#2E5BFF] "}`}>My Jobs</button></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex mt-5 md:ml-16 md:mx-0 mx-6 items-center'>
                        <button
                            className='flex items-center  mr-6 fonts appearance-none md:w-48  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
                            <BiMenuAltLeft className='md:mr-2' /> <span className="hidden md:block">Filter by</span>
                            <BiChevronRight className='ml-14 hidden  md:block' />
                        </button>
                        <div className='relative md:w-52 w-full'>
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
                    {JobTabs()}



                </div>
            </main>
        </div>
    )
}

export default MyJob