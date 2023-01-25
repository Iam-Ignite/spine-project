import { useState, useEffect } from 'react';


import NavBar from '../component/common/NavBar'
import SideBarDashboard from '../component/common/sidebarDashboard'
import MessageList from '../component/message/MessageList';
import MessageReply from '../component/message/MessageReply';
import NewMessage from '../component/message/NewMessage';

function Message() {

    const [width, setWidth] = useState(window.innerWidth);
    const [isWidth, setIsWidth] = useState(true);
    const [isNewMessage, setIsNewMessage] = useState(true);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const renderPage = () => {
        if (width < 820 && isWidth) {
            return (
            <>
                {
                    isNewMessage ? (<MessageList setIsWidth={setIsWidth}/>): (<NewMessage setIsNewMessage={setIsNewMessage}/>)
                }
                </>
            ) 
               
        }
        else if (width < 820 && !isWidth) {
            return  <MessageReply setIsWidth={setIsWidth} />
             
        }
        else {
            return (
                <>
                    <MessageList />
                    {
                      isNewMessage ? (
                    <MessageReply />

                      ):(
                         <NewMessage/>
                      )
                    }
                </>
            )
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
                <div className="md:mx-16 mx-5 mt-10 items-center flex justify-between">
                    <h1 className="fonts font-bold   text-2xl">Messages</h1>
                    <button onClick={() => setIsNewMessage(!true)} className="md:border md:border-[#2E5BFF] rounded-md  px-3 py-3 text-sm bg-[#2E5BFF] text-white">New Message</button>
                </div>
                <div className='w-full md:flex p-8 px-4 md:px-16'>

                    {renderPage()}

                </div>
            </main>
        </div>
    )
}

export default Message