import { Link } from "react-router-dom";
import ProgresssbarJobs from "../utils/ProgresssbarJobs";



const ActivityLogCards = ({ imge, link, btnText, percent, setModal }) => {

    return (
        <div className='p-7 bg-white my-1  border rounded'>
            <div className='flex justify-between mr-5 items-center'>
                <img src={imge} alt='icom' className="h-12" />
                <h1 className='fonts py-2  text-sm'>ACN Investment Audit</h1>
            </div>
            <p className='fonts text-sm py-2 mb-0 text-gray-700'>
                Earnings available now: <b className="font-sans"> N 100.50</b>
            </p>
            <div className='my-2 flex items-center'>
                <span className='text-xs  font-sans py-1 text-black rounded-sm '>{percent}%</span>
                <ProgresssbarJobs progress={percent} istrue />

            </div>
            {
                link ? (
                    <Link to={link}>
                        <button className='text-white bg-blue-600 rounded font-light text-sm  px-8 mt-2 py-2'>{btnText}</button>
                    </Link>
                ) : (
                    <button onClick={() => setModal(true)} className='text-white bg-blue-600 rounded font-light text-sm  px-8 mt-2 py-2'>{btnText}</button>

                )
            }

        </div>
    );
};

export default ActivityLogCards;
