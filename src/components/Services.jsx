import React from 'react'
import '../App.css'
import forwardImg from './next-icon.png'
import backImg from './previous-icon.png'
import Container from './Container'

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
    <div id='scrollWrapper' className='w-full scroller flex flex-col my-10 space-y-5 overflow-x-auto'>
      <div className='m-auto'>
        Our Services
      </div>
      <div className='flex overflow-x-auto space-x-5 mx-7 w-[1500px]'>
        <Container type={'service'} name={'Pick Up'}></Container>
        <Container type={'service'} name={'Accomodation'}></Container>
        <Container type={'service'} name={'Transportation'}></Container>
        <Container type={'service'} name={'Guide'}></Container>
        <Container type={'service'} name={'Food & Drinks'}></Container>

      </div>
    </div>
  )
}
