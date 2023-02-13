import React, { useState } from 'react'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import { JobsPostedCardsTab, ProfessionalJobTabs } from '../component/myJob/JobTabs';
import Professsionals from './Professsionals';


function MyJob() {
    const [filteredName, setFilteredName] = useState("jobsPosted");
    const [job, setJob] = useState(false)

    const JobTabs = () => {
        switch (filteredName) {

            case "professional": return <Professsionals />;
            case "jobsPosted": return (!job ? (<ProfessionalJobTabs setJob={setJob}/>) : (<JobsPostedCardsTab setJob={setJob} />))

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
                    <div className="mt-8  md:mx-2">
                        <div className="border-b mx-14 mt-4 ">
                            <ul className='md:flex flex md:w-1/3 pl-0 mb-0 md:mx-0 w-3/4 items-center mt-2 justify-between'>
                                <li><button onClick={() => setFilteredName("jobsPosted")} className={`text-sm md:text-xl font-medium font-sans text-[#6C757D]   ${filteredName === "jobsPosted" && "h-12  text-[#2E2E2E] font-semibold border-b-2 border-[#2E5BFF] "}`}>Jobs Posted</button></li>
                                <li><button onClick={() => setFilteredName("professional")} className={`text-sm md:text-xl font-medium font-sans text-[#6C757D]   ${filteredName === "professional" && "h-12  text-[#2E2E2E] font-semibold border-b-2 border-[#2E5BFF] "}`}>Get a Professional</button></li>
                            </ul>
                        </div>
                    </div>


                    {JobTabs()}



                </div>
            </main>
        </div>
    )
}

export default MyJob