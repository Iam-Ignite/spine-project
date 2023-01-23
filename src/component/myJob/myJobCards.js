import { Link } from "react-router-dom";
import ProgresssbarJobs from "../utils/ProgresssbarJobs";



const MyJobsCards = ({ imge, link }) => {
    return (
        <div className='p-7 bg-white my-2  border rounded'>
            <div className='flex justify-between mr-5 items-center'>
                <img src={imge} alt='icom' className="h-12" />
                <h1 className='fonts py-2  text-sm'>ACN Investment Audit</h1>
            </div>
            <p className='fonts text-sm py-3 text-gray-700'>
                Earnings available now: <b className="font-sans"> N 100.50</b>
            </p>
            <div className='my-3 flex items-center'>
                <span className='text-xs  font-sans py-2 text-black rounded-sm '>60%</span>
                <ProgresssbarJobs progress='50' istrue />


            </div>

            <div className="flex flex-col md:flex-row py-2 gap-2   md:items-center "><label
                htmlFor='file'
                className='appearance-none flex items-center w-auto boder-4 bg-gray-300 border-dashed text-gray-700 text-xs border rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                <img
                    src='/attach.svg'
                    className='h-4 ml-2'
                    alt=''
                />
                ACA Investments. Doc
            </label>
                <p className="text-[#2E5BFF] text-sm">Download</p></div>
            <Link to={link}>
                <button className='text-white bg-blue-600 rounded text-sm  px-8 mt-4 py-2'>Message Client</button>
            </Link>

        </div>
    );
};

export default MyJobsCards;
