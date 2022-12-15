import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSelector,useDispatch } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle'
import BookingImg from './guy-2616903__340.jpg'
import { useNavigate } from 'react-router-dom';

export default function City(props) {
  const city=useSelector((state)=>state.City.city1);

  const navigate=useNavigate();
  function BookClick(){
    navigate(`/bookingForm`)
  }

  return (
    <div className='mt-5 space-y-10'>

      <div className='mt-3 w-full'>
        <div className='w-full text-center font-bold text-xl text-orange-500'>
          About {city.name}
        </div>
        <div className='w-[80%] mx-auto border-black'>
          {city.about}
        </div>
      </div>

      <div className='mt-3 w-full'>
        <div className='w-full text-center font-bold text-xl text-orange-500'>
          Highlights
        </div>
        <div className='w-[80%] mx-auto'>
          {city.highlight.map((e)=>{
          return(
            <div className='flex'>
              <CircleIcon fontSize='small' color='info' className='my-auto mr-2'></CircleIcon>
              <div>
                {e}
              </div>
            </div>
          )})}
        </div>
      </div>

      <div className='mt-3 w-[80%] mx-auto'>
        <div className='w-full text-center font-bold text-xl text-orange-500'>
          Stays at {city.name}
        </div>
        <div className='flex flex-col md:flex-row'>
        <Carousel className='w-[100%] md:w-[50%] mx-auto'>
          <div className='w-full bg-red-500 h-20'>Image1</div>
          <div className='w-full bg-cyan-500 h-20'>image2</div>
          <div className='w-full bg-yellow-500 h-20'>image3</div>
          <div className='w-full bg-fuchsia-500 h-20'>image4</div>
        </Carousel>
          <div className='w-[100%] md:w-[50%] mx-auto'>
          Chill with us at Zostel {city.name} amidst panoramic Himalayan views, apple orchard and a gorgeous garden cafe. Located at the unbeatable location of {city.name}, our backpacker hostel is an ideal place to laze around with other backpackers
          </div>
        </div>
      </div>

      <div className='mt-3 w-[80%] mx-auto flex flex-col md:flex-row border md:h-40 border-gray-400 rounded-lg'>
        <img src={BookingImg} alt="" className='md:w-[40%] w-full rounded-t-lg md:rounded-t-none md:rounded-l-lg'/>
        <div className='md:w-[60%] w-full bg-cyan-500 rounded-b-lg md:rounded-bl-none md:rounded-r-lg'>
        <div className='w-full text-center font-bold text-xl text-white mt-10'>
          Book a trip to {city.name}
        </div>
        <div onClick={BookClick} className='mx-auto border border-white bg-white text-cyan-500 w-14 text-center rounded-lg mt-5'>
          Book
        </div>
        </div>
      </div>

    </div>
  )
}
