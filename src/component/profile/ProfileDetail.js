import React from 'react'

function ProfileDetail() {

  return (
    
          <div className='w-full h-auto bg-white border'>
            <div className="md:flex justify-between px-10 items-center py-8">
              <div className="flex">
                <div className="relative">
                  <img src="/blue.svg" className='h-16 rounded-full' alt="profile" />
                  <div className="bg-green-600 absolute h-2 rounded-full right-0 bottom-10 w-2"></div>
                </div>
                <div className="ml-3">
                  <h1 className='text-lg mb-1 font-extrabold'>Kolawole Abdul</h1>
                  <p className='text-sm mb-1 text-[#707070]'>N 1000/ hr</p>
                  <p className='text-sm text-[#707070]'>Lagos, Nigeria</p>
                </div>
              </div>
              <div className="md:flex">
                <button className='md:border md:border-[#2E5BFF] rounded-md m-3 px-4 py-2 text-sm bg-[#2E5BFF] text-white'>Terminate</button><button className='md:border rounded-md m-3 px-4 py-2 text-sm bg-[#E0E5F5] text-[#2E5BFF] md:border-[#2E5BFF]'>Message</button>
              </div>
            </div>

            <div className="md:flex px-4 md:px-10 justify-between gap-6 p">
              <div className="flex w-2/5 md:block gap-2 flex-wrap mb-5 ">
                <div className="flex md:gap-6 justify-between px-6 gap-2">
                  <div className="mt-6">
                    <h1 className='text-base font-mormal'>Level</h1>
                    <p className='text-sm text-[#707070]'>Senior</p>
                  </div>
                  <div className="mt-6">
                    <h1 className='text-base font-mormal'>Experience</h1>
                    <p className='text-sm text-[#707070]'>10 years</p>
                  </div>
                </div>
                <div className="mt-6 px-6">
                  <h1 className='text-base font-mormal'>Hours/ Week</h1>
                  <p className='text-sm text-[#707070]'>20 Hours</p>
                </div>
                <div className="mt-6 px-6">
                  <h1 className='text-base font-mormal'>Email Address</h1>
                  <p className='text-sm text-[#707070]'>kolawoleabdul@gmail.com</p>
                </div>
                <div className="mt-6 px-6">
                  <h1 className='text-base font-mormal'>Phone Number</h1>
                  <p className='text-sm text-[#707070]'>08106985251</p>
                </div>
                  <div className="mt-6 px-6">
                  <h1 className='text-base font-mormal'>Languages</h1>
                  <p className='text-sm text-[#707070]'>English, French</p>
                </div>
              </div>
              <div className="w-4/5 md:border  rounded-md bg-[#FCFCFC] h-[90%]">
                <h1 className='font-sans px-4 pt-4 text-lg font-semibold'>Business Analyst</h1>
                <p className='text-sm px-4 text-[#707070]'>The Business Analyst is an agent of change. Business Analysis is a disciplined approach for introducing and managing change to organizations, whether they</p>

                <div className="border-t py-3 px-4 border-b">
                  <b className="font-sans text-base pb-3 font-medium">Jobs Completed (2)</b>
                  <p className='text-xs mt-2 mb-2 text-[#707070]'>ACN Accounting Audit.</p>
                  <p className='text-xs text-[#707070]'>ACN Accounting Audit.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 py-5 px-4  items-center  md:items-center "><label
                  htmlFor='file'
                  className='appearance-none flex items-center w-auto boder-4 border-[#2E5BFF] bg-gray-200 border-dashed text-gray-700 text-xs border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                  <img
                    src='/attach.svg'
                    className='h-3 mx-3'
                    alt=''
                  />
                  ACA Investments. Doc
                </label>
                  <a href='kbk' className="text-gray-600 font-medium text-sm">View Resume</a>
                  <a href='kbk' className="text-[#2E5BFF] font-medium text-sm">View Portfolio</a>
                  </div>
              </div>
            </div>
              <div className="grid grid-cols-2 bg-[#FCFCFC] -mt-5 rounded-md border m-4 py-4 pt-5 items-center justify-between px-4">
                 <div className="ml-3 px-4">
                  <h1 className='text-lg mb-1 font-semibold'>Qualifications</h1>
                  <p className='text-sm border-b pb-2 text-[#707070]'>BSC Accounting, University of Lgos - 2011</p>
                  <p className='text-sm border-b pb-2 text-[#707070]'>ICAN, Institute of Accounting - 2019</p>
                </div>
                 <div className="grid h-52 md:h-32 lg:h-32 grid-cols-2 px-3 -mb-6 -mx-3 ">
                 <div className="w-4/5  px-3">
                 <label className="containers "><input type="checkbox"/>
                 <span className="checkmark fonts">Phasellus vehicula</span>
                 </label>
                 </div>
                 <div className="w-4/5  px-3">
                 <label className="containers ">
                 <input type="checkbox"/>
                 <span className="checkmark fonts">Phasellus vehicula</span>
                 </label>
                 </div><div className="w-4/5  px-3">
                 <label className="containers "><input type="checkbox"/>
                 <span className="checkmark fonts">Phasellus vehicula</span>
                 </label></div><div className="w-4/5  px-3">
                 <label className="containers "><input type="checkbox"/>
                 <span className="checkmark fonts">Phasellus vehicula</span>
                 </label></div>
                 </div>
              </div>
          </div>
  )
}

export default ProfileDetail