import React from 'react'
import { AiOutlinePaperClip, AiOutlineSend } from 'react-icons/ai';
import { BiBold, BiChevronLeft, BiChevronRight, BiItalic } from 'react-icons/bi';
import { BsFillEmojiSmileFill } from "react-icons/bs";


function MessageReply({setIsWidth}) {
    return (
        <div className="w-full h-auto relative pb-4 bg-white border">
            <div className="border-b">
               <button onClick={() => setIsWidth(true)} className="md:hidden flex mt-4 ml-2 items-center">
                  <BiChevronLeft />Back
               </button>
                <h1 className="text-base p-4"><b className='font-sans text-lg font-medium '>From:</b> Maryann Tosin</h1>
            </div>
            <div className="p-4 grid gap-3">
                <p className='text-base text-gray-600'>he marketing and promotional SMS templates listed below work because they are attention grabbers, use powerful calls to action, create a sense of urgency, and share information in a clear and concise manner.</p>
                <p className='text-base text-gray-600'> While it may be tempting to write certain words like FREE, SALE, NOW, or SIGN UP, in all caps, this could drive customers away.</p>
                <p className='text-base text-gray-600'> Keep your promo messages friendly and conversational. Feel free to experiment with the wording of your messages, monitor their performance and tweak them based on your audience’s response.</p>
            </div>
            <div className="mt-3 mx-4 bg-[#FCFCFC] md:absolute bottom-4 rounded w-auto md:w-[95%] p-5 border">
                <textarea name="" className='w-full bg-[#FCFCFC] outline-none' placeholder='Please type in your response here...' id="" cols="30" rows="8"></textarea>
                <div className="flex justify-between">
                    <div className="my-2 flex justify-between items-center text-2xl gap-3">
                        <button><BiBold /></button>
                        <button><BiItalic /></button>
                        <button className='font-'><del>S</del></button>
                        <button className='flex'><BiChevronLeft /><BiChevronRight /></button>
                    </div>
                    <div className="my-2 flex justify-between items-center text-2xl gap-3">
                        <button>@</button>
                        <button><AiOutlinePaperClip /></button>
                        <button className='font-'><BsFillEmojiSmileFill /> </button>
                        <button className='flex'><AiOutlineSend /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageReply