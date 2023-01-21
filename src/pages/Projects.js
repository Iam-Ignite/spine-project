import React, { useState } from 'react'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import DashTable from '../component/projects/dashTable'
import TableCard from '../component/projects/tableCard'

function Projects() {
    const [filteredName, setFilteredName] = useState("In Progress")
    return (
        <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] h-screen pb-44 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full'>
                    <div className="mt-8 md:mx-16">
                        <h1 className='font-sans font-semibold text-xl'>Projects</h1>
                        <div className="border-b mx-5">
                            <ul className='md:flex flex md:w-2/5  mr-14 md:mr-0 md:mx-0 items-center mt-2 justify-between'>
                                <li><button onClick={() => setFilteredName("In Progress")} className={`${filteredName === "In Progress" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>In-Progress</button></li>
                                <li><button onClick={() => setFilteredName("Pending")} className={`${filteredName === "Pending" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Pending</button></li>
                                <li><button onClick={() => setFilteredName("Completed")} className={`${filteredName === "Completed" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Completed</button></li>
                                <li><button onClick={() => setFilteredName("Overdue")} className={`${filteredName === "Overdue" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Overdue</button></li>
                            </ul>
                        </div>
                    </div>
                    <DashTable filteredName={filteredName} />
                    <TableCard filteredName={filteredName} />

                </div>
            </main>
        </div>
    )
}

export default Projects