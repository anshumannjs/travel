import React from 'react'

export default function ContactUs(props) {
    return (
        <div>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-5'>
                <div className='md:w-[45%] w-full'>
                    <div className=''>
                        First Name
                    </div>
                    <input type="text" className='border border-gray-400 rounded w-full' />
                </div>

                <div className='md:w-[45%] w-full'>
                    <div>
                        Last Name
                    </div>
                    <input type="text" className='border border-gray-400 rounded w-full' />
                </div>
            </div>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-5'>
                <div className='md:w-[45%] w-full'>
                    <div className=''>
                        Email
                    </div>
                    <input type="text" className='border border-gray-400 rounded w-full' />
                </div>

                <div className='md:w-[45%] w-full'>
                    <div>
                        Phone No
                    </div>
                    <input type="text" className='border border-gray-400 rounded w-full' />
                </div>
            </div>
            <div className='w-[90%]  mx-auto mt-5'>
                <div>
                    Leave us a message
                </div>
                <input type="text" className='border border-gray-400 rounded w-full h-16' />
            </div>
            <div className='mx-auto border bg-cyan-500 text-white w-20 text-center rounded-lg mt-3'>
                Submit
            </div>
        </div>
    )
}
