import React from 'react'
import Container from '../Container'

export default function Explore(props) {


  function handleClick(e){
    console.log(e);
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-10 mt-10'>
      <Container type={'destination'} city={'Kanchenjunga Base Camp'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Chadar Trek'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Gomukh Tapovan Trek'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Markha Valley Trek'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Kuari Pass Trek'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Pin Parvati Pass Trek'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Nanda Devi East Bc and Milam Glacier'} setCity={props.setCity}></Container>
      <Container type={'destination'} city={'Dzongri Goecha La Trek'} setCity={props.setCity}></Container>
    </div>
  )
}
