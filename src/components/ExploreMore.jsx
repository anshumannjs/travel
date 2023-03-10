import React from 'react'
import demoImg from './istockphoto-614316294-612x612.jpg'
import { Link } from 'react-router-dom'

export default function ExploreMore() {
  return (
    <div className='flex flex-col md:flex-row border border-black w-[90%] h-56 mt-5 bg-fuchsia-500 mx-auto rounded-lg'>
        <div className='flex flex-col h-[40%] md:w-[50%]'>
            <div className='text-white h-[50%] ml-3 md:m-auto'>
                Discover All Destinations
            </div>
            <div className='cursor-pointer border border-black rounded-2xl w-16 text-center bg-white text-fuchsia-500 ml-3 md:m-auto'>
              <Link to={"/explore"}>
                Explore
              </Link>
            </div>
        </div>
        <img src={'https://media.nomadicmatt.com/preparedtraveler.jpg'} alt="" className='w-full md:w-[50%] h-[60%] md:h-full rounded-b-lg md:rounded-r-lg md:rounded-l-none'/>
    </div>
  )
}
