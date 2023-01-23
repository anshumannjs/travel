import React from 'react'
import '../App.css'
import forwardImg from './next-icon.png'
import backImg from './previous-icon.png'
import Container from './Container'
import pickUp from './istockphoto-614316294-612x612.jpg'

export default function Services() {
  function back(e) {
    let a = document.getElementById("scrollWrapper").scrollLeft;
    document.getElementById("scrollWrapper").scrollTo(a - 500, 0);
  }

  function forward(e) {
    let a = document.getElementById("scrollWrapper").scrollLeft;
    document.getElementById("scrollWrapper").scrollTo(a + 500, 0);
  }

  return (
    <div className='w-full flex flex-col'>
      <div className='mx-auto'>
        Our Services
      </div>
    <div id='scrollWrapper' className='w-full scroller flex flex-col mt-10 overflow-x-auto'>
      <div className='flex overflow-x-auto space-x-5 mx-7 w-[1500px]'>
        <Container type={'service'} name={'Pick Up'} img={pickUp}></Container>
        <Container type={'service'} name={'Accomodation'} img={"https://media.istockphoto.com/id/1303630250/photo/clean-white-bath-towels-on-the-neatly-clean-bedroom-coziness-and-clean-concept.jpg?b=1&s=170667a&w=0&k=20&c=oh6uM-jmnlOIAVH40x80Xc0CUpmFVdV0a-_00nJGbME="}></Container>
        <Container type={'service'} name={'Transportation'} img="https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg"></Container>
        <Container type={'service'} name={'Guide'} img={"https://media.istockphoto.com/id/609799244/photo/arrow-on-an-old-map.jpg?s=612x612&w=0&k=20&c=fbx4mRBGWq6l58gzG0ok5gQsv6wWd6YU7lMhAOcCjZY="}></Container>
        <Container type={'service'} name={'Food & Drinks'} img="https://image.shutterstock.com/image-photo/composition-variety-organic-food-products-260nw-566591296.jpg"></Container>

      </div>

      </div>

      <div className='lg:flex justify-between hidden'>
      <div onClick={back} className='border border-black h-10 w-10'>
        <img src="https://www.svgrepo.com/show/326479/arrow-back-outline.svg" alt="" />
      </div>
      <div onClick={forward} className='border border-black h-10 w-10'>
        <img src="https://www.svgrepo.com/show/305136/arrow-forward.svg" alt="" />
      </div>
      </div>

    </div>
  )
}
