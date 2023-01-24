import './App.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Services from './components/Services';
import Map from './components/Map';
import Ending from './components/Ending';
import ExploreMore from './components/ExploreMore';
import Explore from './components/Explore/Explore';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import City from './components/Explore/City';
import BookingForm from './components/Explore/BookingForm';
import ContactUs from './components/ContactUs';
import { useSelector } from 'react-redux';

function App() {

  const [city,setCity]=useState(null);
  const [data,setData]=useState(null);
  const [coverImg,setCoverImg]=useState(null);
  const [coverName,setCoverName]=useState("home");
  function setcity(str){
    setCity(str);
  }
  function setdata(str){
    setData(str);
  }

  function Home(){
    setCoverImg(null);
    setCoverName("home");
    return(
      <>
      <Services></Services>
      <Map setCity={setcity}></Map>
      <ExploreMore></ExploreMore>
      </>
    )
  }

  const city1=useSelector((state)=>state.City.city1);

  function HandleExplore(){
    setCoverName("Destinations");
    setCoverImg(`https://media.nomadicmatt.com/preparedtraveler.jpg`);
    return(
      <Explore setCity={setcity}></Explore>
    )
  }

  function HandleCity(){
    console.log(city1.name)
    setCoverName(city1.name);
    setCoverImg(city1.image);
    return(
      <City></City>
    )
  }

  function HandleBooking(){
    setCoverName("Booking Form");
    setCoverImg(`https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=2000`);
    return(
      <BookingForm></BookingForm>
    )
  }

  function HandleContact(){
    setCoverName("Contact us");
    setCoverImg(`https://media.istockphoto.com/id/1205214235/photo/path-through-sunlit-forest.jpg?s=612x612&w=0&k=20&c=-AS1aTz85kcZ2X7E8n2iFlm6dsdIMyWGWrSDQ1o-f_0=`);
    return(
      <ContactUs></ContactUs>
    )
  }

  return (
    <div className="App">
      <div>Hello there</div>
      <Navbar></Navbar>
      <Cover img={coverImg} name={coverName}></Cover>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<HandleExplore/>}/>
        <Route path={`/${city1==undefined?null:city1.name.split(" ").join("")}`} element={<HandleCity/>}/>
        <Route path='/bookingForm' element={<HandleBooking/>}/>
        <Route path='/contactUs' element={<HandleContact/>}/>
      </Switch>
      <Ending></Ending>
    </div>
  );
}

export default App;
