import JobsPostedCards from './JobsPostedCards'
import { BiArrowBack, BiChevronRight, BiMenuAltLeft } from 'react-icons/bi'
import { useState } from 'react'
import ProfessionalJob from './ProfessionalJob'
import AddJob from './addjob'
// import AddJob from './AddJob'


export const JobsPostedCardsTab = ({setJob}) => {
    const [modal, setModal] = useState(false);


    return (
        <>
            <div className='flex mt-2 md:ml-16 py-3 md:mx-0 mx-6 items-center'>
                <button
                    className='flex items-center  mr-6 fonts appearance-none md:w-48  bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
                    <BiMenuAltLeft className='md:mr-2' /> <span className="hidden md:block">Filter by</span>
                    <BiChevronRight className='ml-14 hidden  md:block' />
                </button>
                <div className='relative md:w-96 w-full'>
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
                <button className='text-[#fff] font-light bg-[#2E5BFF] fonts rounded text-sm px-4 ml-6  py-2' onClick={() => setModal(true)}>Post a job</button>

            </div>
            <p onClick={() => setJob(false)} className='flex cursor-pointer items-center -mb-5 mt-2 md:ml-16'><BiArrowBack className='mr-1' />Back</p>
            <div className="grid md:grid-cols-2 mx-5 gap-4 md:mx-16">
                <JobsPostedCards />
                <JobsPostedCards />

            </div>
            <AddJob modal={modal} />
        </>
    )
}

export const ProfessionalJobTabs = ({setJob}) => {

    return (
        <>
            <div className='flex mt-2 md:ml-16 py-3 md:mx-0 mx-6 items-center'>
                <button
                    className='flex items-center  mr-6 fonts appearance-none md:w-48  bg-white text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'>
                    <BiMenuAltLeft className='md:mr-2' /> <span className="hidden md:block">Filter by</span>
                    <BiChevronRight className='ml-14 hidden  md:block' />
                </button>
                <div className='relative md:w-96 w-full'>
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
            <div className="grid md:grid-cols-2 mx-5 gap-4 md:mx-16">

                <ProfessionalJob setJob={setJob} />
                <ProfessionalJob  setJob={setJob}/>
            </div>
        </>
    )
}

