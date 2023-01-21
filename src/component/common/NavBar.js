import React, { useState } from 'react'

function NavBar() {
   const [show, setShow] = useState(false)

    return (
        <nav class='fixed w-full flex md:py-0 py-4 md:px-6 p-3  lg:px-0 items-center justify-between lg:justify-end   md:justify-end top-0 md:z-50 lg:z-50 mx-auto h-20 bg-white  shadow-sm'>
            <div
                className={`text-[#007bf5] z-20 relative flex items-center text-3xl  md:hidden lg:hidden`}>
                <img src="/Logo.svg" alt=""  /><span className="absolute text-2xl font-sans right-2">Spine</span>
            </div>
            <div className='relative  md:block lg:block'>
                <input
                    type='text'
                    className={`appearance-none md:block  md:w-42 w-auto  bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${show ? "block" : "hidden"  }  `}
                    placeholder='Search here '
                />
                <img
                    src='/magnifying-glass.svg'
                    className='absolute right-4  top-2' alt=''
                />
            </div>
              <img
                    src='/magnifying-glass.svg' onClick={() => setShow(true)}
                    className={`right-4 md:hidden ml-16 block ${!show ? "block" : "hidden"  } `} alt=''
                />

             <img
                src='/notification.svg'
                className='h-8  md:ml-16  lg:ml-16'
                alt=''
            />
            <img
                src='/image icon.svg'
                className='p-2  md:ml-16 md:hidden block rounded-full lg:ml-16'
                alt=''
            />
            <div className="border-r md:h-full md:mr-80  lg:mr-80 md:ml-10 "></div>
        </nav>)
}

export default NavBar