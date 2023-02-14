import React from 'react'
import { AiOutlinePaperClip, AiOutlineSend } from 'react-icons/ai';
import { BiBold, BiChevronLeft, BiChevronRight, BiItalic } from 'react-icons/bi';
import { BsFillEmojiSmileFill } from "react-icons/bs";


function NewMessage({ setIsNewMessage }) {
    return (
        <div className="w-full h-auto pb-4 p-4 bg-white border">
            <div className="">
                <button onClick={() => setIsNewMessage(true)} className="md:hidden flex mt-4 ml-2 items-center">
                    <BiChevronLeft />Back
                </button>
            </div>
            <div className=' w-auto flex items-center mb-6 mt-3 bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                <label
                    className='w-auto'
                    htmlFor='grid-last-name'>
                    Send To:
                </label>
                <input
                    className='md:w-[80%] w-[70%] text-xs bg-[#F4F4F4] text-gray-700  py-2 px-3 leading-tight focus:outline-none'
                    id='grid-last-name'
                    type='text'
                />
            </div>
            <div className=' w-auto flex items-center mb-6 bg-[#F4F4F4] text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
                <label
                    className='w-auto'
                    htmlFor='grid-last-Subject'>
                Subject :
                </label>
                <input
                    className='md:w-[80%] w-[70%] text-xs bg-[#F4F4F4] text-gray-700  py-2 px-3 leading-tight focus:outline-none'
                    id='grid-last-name'
                    type='text'
                />
            </div>
            <div className="my-5 border-b">
            
            </div>
            <div className="mt-3 bg-[#FCFCFC] rounded w-auto p-4 border">
                <textarea name="" className='w-full bg-[#FCFCFC] outline-none' placeholder='Please type in your response here...' id="" cols="30" rows="10"></textarea>
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

export default NewMessage