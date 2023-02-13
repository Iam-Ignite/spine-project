import React, { useState } from 'react'
import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import DashTableHiredProfessional from '../component/projects/dashTableHiredProfessional'
import TableCard from '../component/projects/tableCard'

function HiredProfessional() {
        const [filteredName, setFilteredName] = useState("In Progress")

  return (
     <div className='flex flex-col-reverse md:flex-row md:flex lg:flex'>
            {/* <!-- NAV --> */}
            <SideBarDashboard />
            {/* <!-- END OF NAV -->

           <!-- PAGE CONTENT --> */}
            <main className='flex-1  bg-[#FBFCFD] h-screen pb-24 lg:overflow-x-hidden md:overflow-x-hidden py-16 overflow-y-scroll'>
                <NavBar />
                <div className='w-full'>
                    <div className="mt-8  mx-5 md:mx-16">
                        <h1 className='font-sans font-semibold ml-6 text-xl'>Hired Professionals</h1>
                        <div className="border-b ml-5">
                            <ul className='md:flex flex md:w-1/5 mb-0 mr-14 pl-1 md:mx-0 items-center mt-2 justify-between'>
                                <li><button onClick={() => setFilteredName("In Progress")} className={`${filteredName === "In Progress" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>In-Progress</button></li>
                                <li><button onClick={() => setFilteredName("Pending")} className={`${filteredName === "Pending" && "text-[#05154E] h-12 font-sans text-sm font-semibold border-b-2 border-[#05154E] "}`}>Pending</button></li>
                            </ul>
                        </div>
                    </div>
                    <DashTableHiredProfessional occupation="Occupation" level="Senior" hoursWeek='20' experience='5' url="/profile" filteredName={filteredName} />
                    <TableCard filteredName={filteredName} />

                </div>
            </main>
        </div>
  )
}

export default HiredProfessional