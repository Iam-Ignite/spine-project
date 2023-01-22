import React, { useState } from 'react'
import EditProfile from './EditProfile'

function ProfileDetail() {
  const [edit, setEdit] = useState(false)

  return (
    <>
      {
        !edit ? (
          <div className='w-full h-auto bg-white border'>
            <div className="border-b">
              <h1 className='text-lg font-sans font-medium p-4'>Profile</h1>
            </div>
            <div className="md:flex justify-between px-10 items-center py-8">
              <div className="flex">
                <div className="relative">
                  <img src="/blue.svg" className='h-14 rounded-full' alt="profile" />
                  <div className="bg-green-600 absolute h-2 rounded-full right-0 bottom-5 w-2"></div>
                </div>
                <div className="ml-3">
                  <h1 className='text-lg font-extrabold'>Kolawole Abdul</h1>
                  <p className='text-sm text-[#707070]'>N 1000/ hr</p>
                  <p className='text-sm text-[#707070]'>Lagos, Nigeria</p>
                </div>
              </div>
              <div className="md:flex">
                <button onClick={() => setEdit(true)} className='md:border md:border-[#2E5BFF] rounded-md m-3 px-3 py-3 text-sm bg-[#2E5BFF] text-white'>Edit Profile</button><button className='md:border rounded-md m-3 px-3 py-3 text-sm bg-[#E0E5F5] text-[#2E5BFF] md:border-[#2E5BFF]'>Copy Link</button>
              </div>
            </div>

            <div className="md:flex px-4 md:px-10 justify-between gap-6 py-10 h-auto">
              <div className="flex md:block gap-2 flex-wrap mb-5 ">
                <div className="flex md:gap-6 gap-2">
                  <div className="mt-6">
                    <h1 className='text-lg font-extralight'>Level</h1>
                    <p className='text-sm text-[#707070]'>Senior</p>
                  </div>
                  <div className="mt-6">
                    <h1 className='text-lg font-extralight'>Experience</h1>
                    <p className='text-sm text-[#707070]'>10 years</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h1 className='text-lg font-extralight'>Hours/ Week</h1>
                  <p className='text-sm text-[#707070]'>20 Hours</p>
                </div>
                <div className="mt-6">
                  <h1 className='text-lg font-extralight'>Email Address</h1>
                  <p className='text-sm text-[#707070]'>kolawoleabdul@gmail.com</p>
                </div>
                <div className="mt-6">
                  <h1 className='text-lg font-extralight'>Phone Number</h1>
                  <p className='text-sm text-[#707070]'>08106985251</p>
                </div>
              </div>
              <div className="w-full md:border  rounded-md bg-[#FCFCFC]">
                <h1 className='font-sans px-5 pt-5 font-semibold'>Business Analyst</h1>
                <p className='text-sm px-5 text-[#707070] py-2'>The Business Analyst is an agent of change. Business Analysis is a disciplined approach for introducing and managing change to organizations, whether they</p>

                <div className="border-t py-5 px-5 mt-5 border-b">
                  <b className="font-sans text-base py-2 font-medium">Jobs Completed (2)</b>
                  <p className='text-xs text-[#707070]'>ACN Accounting Audit.</p>
                  <p className='text-xs text-[#707070]'>ACN Accounting Audit.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 py-5 px-5   md:items-center "><label
                  htmlFor='file'
                  className='appearance-none flex items-center w-auto boder-4 bg-gray-300 border-dashed text-gray-700 text-xs border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                  <img
                    src='/attach.svg'
                    className='h-3 mx-3'
                    alt=''
                  />
                  ACA Investments. Doc
                </label>
                  <p className="text-[#2E5BFF] text-sm">Edit Resume</p></div>
              </div>
            </div>
          </div>
        ) : (
          <EditProfile />
        )
      }
    </>
  )
}

export default ProfileDetail