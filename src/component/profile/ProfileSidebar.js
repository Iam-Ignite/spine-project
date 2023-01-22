import React from 'react'

function ProfileSidebar({setTabName, tabName}) {
  return (
    <div className='md:border md:bg-white md:p-5 py-5 md:w-1/3 md:mr-6'>
      <ul className='flex md:flex-col md:overflow-x-0 overflow-x-scroll gap-2 md:gap-8 md:ml-6 md:py-8  md:justify-evenly justify-between'>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "profiledetail" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('profiledetail')}>Profile Detail</button></li>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "qualitifaction" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('qualitifaction')}>Qualitifaction</button></li>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "skills" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('skills')}>Skills</button></li>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "setrate" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('setrate')}>Set Rate</button></li>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "bank" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('bank')}>Bank Detail</button></li>
        <li><button className={`border w-36 rounded-md md:w-auto md:border-none md:p-0 p-2 text-sm md:text-base ${tabName === "security" ? "text-[#2E5BFF] border-[#2E5BFF]" : ""}`} onClick={() => setTabName('security')}>Security</button></li>
      </ul>
    </div>
  )
}

export default ProfileSidebar