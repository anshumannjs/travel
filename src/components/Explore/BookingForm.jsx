import React from 'react'

export default function BookingForm(props) {
  return (
    <div className='w-full'>
        <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-5'>
        <div className='md:w-[45%] w-full'>
        <div className=''>
            First Name
        </div>
        <input type="text" className='border border-gray-400 rounded w-full'/>
        </div>

        <div className='md:w-[45%] w-full'>
        <div>
            Last Name
        </div>
        <input type="text" className='border border-gray-400 rounded w-full'/>
        </div>
      </div>
      <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between mt-5'>
        <div className='md:w-[45%] w-full'>
        <div className=''>
            Email
        </div>
        <input type="text" className='border border-gray-400 rounded w-full'/>
        </div>

        <div className='md:w-[45%] w-full'>
        <div>
            Phone No
        </div>
        <input type="text" className='border border-gray-400 rounded w-full'/>
        </div>
      </div>
      <div className='w-[90%] mx-auto mt-5'>
        <div>
            Address
        </div>
        <input type="text" className='border border-gray-400 rounded w-full h-16'/>
      </div>
      <div className='w-[90%] mx-auto mt-5'>
        <div>
            Number of persons
        </div>
        <input type="number" name="" id="" className='border border-gray-400 rounded'/>
      </div>
      <div className='w-[90%] mx-auto mt-5'>
        <div>
            Service you want to avail
        </div>
        <div>
        <input type="checkbox" name="" id="" className='border border-gray-400 rounded'/>Pick Up
        </div>
        <div>
        <input type="checkbox" name="" id="" className='border border-gray-400 rounded'/>Transport
        </div>
      </div>
      <div className='w-[90%] mx-auto mt-5'>
        <div className='w-full text-center'>
          Select your touring duration
        </div>
        <div className='w-full flex flex-col md:flex-row justify-between'>
          <div className='w-[45%]'>
            <div>
              From :
            </div>
            <input type="date" name="" id="" className='border border-gray-400 rounded'/>
          </div>
          <div className='w-[45%]'>
            <div>
              To :
            </div>
            <input type="date" name="" id="" className='border border-gray-400 rounded'/>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-5 w-40 border border-cyan-500 text-cyan-500 text-center rounded-lg'>
        Proceed to booking
      </div>
    </div>
  )
}
