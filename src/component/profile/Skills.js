import React from 'react'

function Skills() {
    return (
        <div className='w-full h-auto md:p-10 p-5 bg-white border'>
            <h3 className='text-3xl  mb-2 fonts'>
                Skills
            </h3>
            <b className='py-1 text-lg mb-16 font-sans '>
                Choose at least one skill
            </b>

            <form>
                <div className='grid md:grid-cols-4 grid-cols-2 my-10  gap-8 '>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='w-full px-3 mb-6 md:mb-0'>
                        <label className='containers '>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                    <div className='px-3 md:mb-6 mb-6'>
                        <label className='containers'>
                            <input type='checkbox' />
                            <span className='checkmark fonts'>
                                Phasellus vehicula
                            </span>
                        </label>
                    </div>
                </div>

                <div className='w-full lg:mt-0  md:mb-0'>
                    <label
                        className='block uppercase fonts tracking-wide font-bold text-gray-700 text-sm  mb-2'
                        for='grid-first-name'>
                        Can't find any? Enter skill here
                    </label>
                    <div className="md:flex items-center mb-5">
                        <input
                            className='appearance-none text-xs block md:w-2/4 w-full mb-5 md:mb-0 bg-white text-gray-700 border rounded py-3 px-4 mr-5 leading-tight focus:outline-none focus:bg-white'
                            id='grid-first-name'
                            type='text'
                            placeholder='Lorem Ipsum'
                        />
                        <button className='bg-blue-100 py-2 w-3/5 md:w-auto px-5 rounded-sm text-blue-600'>
                            <span className='border text-lg mx-2 fonts px-1'>
                                +
                            </span>
                            Add More
                        </button>
                    </div>
                </div>

                <button className='bg-blue-600 py-2  px-5 mx-1 fonts rounded-sm text-white'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default Skills