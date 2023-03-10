import React from 'react'
import '../App.css'
import locationMarker from './Map-Marker-PNG-Pic.png'
import { MapContainer, TileLayer, useMap, Marker, useMapEvent } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L, { icon, marker } from 'leaflet'
import { useState,useEffect } from 'react'
import forwardImg from './next-icon.png'
import backImg from './previous-icon.png'
import demoImg from './istockphoto-614316294-612x612.jpg'
import next from './130884.png'
import { useDispatch } from 'react-redux'
import { newCity } from '../Redux States/CityInfo';
import { useNavigate } from 'react-router-dom';
import { Obj } from './Explore/CityObj';


export default function Map(props) {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleClick(e){
    console.log(e.target.innerText);
    let ans=e.target.innerText.split(" ").join("")
        dispatch(newCity(Obj[ans]))
        props.setCity(ans);
        navigate(`/${ans}`);
  }

  useEffect(()=>{
    marker1Click();
  },[])

  let LeafIcon = L.Icon.extend({
    options: {
      iconSize: [20, 30],
      iconAnchor: [22, 30]
    }
  })

  let LargeLeafIcon = L.Icon.extend({
    options: {
      iconSize: [40, 60],
      iconAnchor: [22, 60]
    }
  })

  let functionCall=[marker1Click,marker2Click,marker3Click,marker4Click,marker5Click];

  function clickFront(){
    let a=vsbl;
    if (vsbl==5){
      a=0
      setVsbl(1);
    }
    else{
      setVsbl(a+1);
    }
    const c=functionCall[a];
    c();
  }

  function clickBack(){
    let a=vsbl;
    if (vsbl==1){
      a=6
      setVsbl(5);
    }
    else{
      setVsbl(a-1);
    }
    const c=functionCall[a-2];
    c();
  }

  function marker1Click(e) {
    setMarker1(true);
    document.getElementById(`1`).classList.add("flex");
    document.getElementById(`1`).classList.remove('hidden');
    setMarker2(false);
    document.getElementById(`2`).classList.add('hidden');
    document.getElementById(`2`).classList.remove("flex");
    setMarker3(false);
    document.getElementById(`3`).classList.add('hidden');
    document.getElementById(`3`).classList.remove("flex");
    setMarker4(false);
    document.getElementById(`4`).classList.add('hidden');
    document.getElementById(`4`).classList.remove("flex");
    setMarker5(false);
    document.getElementById(`5`).classList.add('hidden');
    document.getElementById(`5`).classList.remove("flex");
  }
  function marker2Click(e) {
    setMarker1(false);
    document.getElementById(`1`).classList.remove("flex");
    document.getElementById(`1`).classList.add('hidden');
    setMarker2(true);
    document.getElementById(`2`).classList.remove('hidden');
    document.getElementById(`2`).classList.add("flex");
    setMarker3(false);
    document.getElementById(`3`).classList.add('hidden');
    document.getElementById(`3`).classList.remove("flex");
    setMarker4(false);
    document.getElementById(`4`).classList.add('hidden');
    document.getElementById(`4`).classList.remove("flex");
    setMarker5(false);
    document.getElementById(`5`).classList.add('hidden');
    document.getElementById(`5`).classList.remove("flex");
  }
  function marker3Click(e) {
    setMarker1(false);
    document.getElementById(`1`).classList.remove("flex");
    document.getElementById(`1`).classList.add('hidden');
    setMarker2(false);
    document.getElementById(`2`).classList.add('hidden');
    document.getElementById(`2`).classList.remove("flex");
    setMarker3(true);
    document.getElementById(`3`).classList.remove('hidden');
    document.getElementById(`3`).classList.add("flex");
    setMarker4(false);
    document.getElementById(`4`).classList.add('hidden');
    document.getElementById(`4`).classList.remove("flex");
    setMarker5(false);
    document.getElementById(`5`).classList.add('hidden');
    document.getElementById(`5`).classList.remove("flex");
  }
  function marker4Click(e) {
    setMarker1(false);
    document.getElementById(`1`).classList.remove("flex");
    document.getElementById(`1`).classList.add('hidden');
    setMarker2(false);
    document.getElementById(`2`).classList.add('hidden');
    document.getElementById(`2`).classList.remove("flex");
    setMarker3(false);
    document.getElementById(`3`).classList.add('hidden');
    document.getElementById(`3`).classList.remove("flex");
    setMarker4(true);
    document.getElementById(`4`).classList.remove('hidden');
    document.getElementById(`4`).classList.add("flex");
    setMarker5(false);
    document.getElementById(`5`).classList.add('hidden');
    document.getElementById(`5`).classList.remove("flex");
  }
  function marker5Click(e) {
    setMarker1(false);
    document.getElementById(`1`).classList.remove("flex");
    document.getElementById(`1`).classList.add('hidden');
    setMarker2(false);
    document.getElementById(`2`).classList.add('hidden');
    document.getElementById(`2`).classList.remove("flex");
    setMarker3(false);
    document.getElementById(`3`).classList.add('hidden');
    document.getElementById(`3`).classList.remove("flex");
    setMarker4(false);
    document.getElementById(`4`).classList.add('hidden');
    document.getElementById(`4`).classList.remove("flex");
    setMarker5(true);
    document.getElementById(`5`).classList.remove('hidden');
    document.getElementById(`5`).classList.add("flex");
  }

  const [marker1, setMarker1] = useState(false);
  const [marker2, setMarker2] = useState(false);
  const [marker3, setMarker3] = useState(false);
  const [marker4, setMarker4] = useState(false);
  const [marker5, setMarker5] = useState(false);
  const [vsbl,setVsbl]=useState(1);

  return (
    <div className='mt-5 w-full h-[600px] flex flex-col'>
      <MapContainer center={[28.2376, 84.2700]} zoom={5} scrollWheelZoom={false} className={`w-full h-[65%]`}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[27.702414, 88.147881]} eventHandlers={{ click: marker1Click }} icon={marker1 ? new LargeLeafIcon({ iconUrl: locationMarker }) : new LeafIcon({ iconUrl: locationMarker })}>
        </Marker>
        <Marker position={[28.56964, 77.1865]} eventHandlers={{ click: marker2Click }} icon={marker2 ? new LargeLeafIcon({ iconUrl: locationMarker }) : new LeafIcon({ iconUrl: locationMarker })}>
        </Marker>
        <Marker position={[30.3875, 78.51305]} eventHandlers={{ click: marker3Click }} icon={marker3 ? new LargeLeafIcon({ iconUrl: locationMarker }) : new LeafIcon({ iconUrl: locationMarker })}>
        </Marker>
        <Marker position={[34.04042, 77.32651]} eventHandlers={{ click: marker4Click }} icon={marker4 ? new LargeLeafIcon({ iconUrl: locationMarker }) : new LeafIcon({ iconUrl: locationMarker })}>
        </Marker>
        <Marker position={[30.4456, 79.5700]} eventHandlers={{ click: marker5Click }} icon={marker5 ? new LargeLeafIcon({ iconUrl: locationMarker }) : new LeafIcon({ iconUrl: locationMarker })}>
        </Marker>
      </MapContainer>
      <div className='flex overflow-x-auto scroll-m-0 space-x-5 scroller place-content-evenly h-[30%]'>
        <div className='w-[5%] my-auto' onClick={clickBack}>
          <img src={backImg} alt="" />
        </div>
        <div id='1' className='border border-black min-w-[80%] m-auto h-[80%] mapAnimate rounded-xl flex flex-col md:flex-row' >
          <img src={Obj.KanchenjungaBaseCamp.image} alt="" className='w-full h-[70%] rounded-t-xl md:h-full md:w-[70%] md:rounded-l-xl md:rounded-r-none'/>
          <div onClick={(e)=>handleClick(e)} className='bg-cyan-500 h-[30%] w-full flex justify-between rounded-b-xl md:rounded-r-xl md:rounded-l-none md:h-full'>
            <div className='my-auto ml-3 text-white'>Kanchenjunga Base Camp</div>
            <img src={next} alt="" className='w-[10%] h-[40%] my-auto'/>
          </div>
        </div>
        <div id='2' className='border hidden border-black min-w-[80%] m-auto h-[80%] mapAnimate rounded-xl  flex-col md:flex-row' >
          <img src={Obj.ChadarTrek.image} alt="" className='w-full h-[70%] rounded-t-xl md:h-full md:w-[70%] md:rounded-l-xl md:rounded-r-none'/>
          <div className='bg-cyan-500 h-[30%] w-full flex justify-between rounded-b-xl md:rounded-r-xl md:rounded-l-none md:h-full'>
            <div className='my-auto ml-3 text-white'>Chadar Trek</div>
            <img src={next} alt="" className='w-[10%] h-[40%] my-auto'/>
          </div>
        </div>
        <div id='3' className='border hidden border-black min-w-[80%] m-auto h-[80%] mapAnimate rounded-xl  flex-col md:flex-row' >
          <img src={Obj.GomukhTapovanTrek.image} alt="" className='w-full h-[70%] rounded-t-xl md:h-full md:w-[70%] md:rounded-l-xl md:rounded-r-none'/>
          <div className='bg-cyan-500 h-[30%] w-full flex justify-between rounded-b-xl md:rounded-r-xl md:rounded-l-none md:h-full'>
            <div className='my-auto ml-3 text-white'>Gomukh Tapovan Trek</div>
            <img src={next} alt="" className='w-[10%] h-[40%] my-auto'/>
          </div>
        </div>
        <div id='4' className='border hidden border-black min-w-[80%] m-auto h-[80%] mapAnimate rounded-xl  flex-col md:flex-row' >
          <img src={Obj.MarkhaValleyTrek.image} alt="" className='w-full h-[70%] rounded-t-xl md:h-full md:w-[70%] md:rounded-l-xl md:rounded-r-none'/>
          <div className='bg-cyan-500 h-[30%] w-full flex justify-between rounded-b-xl md:rounded-r-xl md:rounded-l-none md:h-full'>
            <div className='my-auto ml-3 text-white'>Markha Valley Trek</div>
            <img src={next} alt="" className='w-[10%] h-[40%] my-auto'/>
          </div>
        </div>
        <div id='5' className='border hidden border-black min-w-[80%] m-auto h-[80%] mapAnimate rounded-xl  flex-col md:flex-row' >
          <img src={Obj.KuariPassTrek.image} alt="" className='w-full h-[70%] rounded-t-xl md:h-full md:w-[70%] md:rounded-l-xl md:rounded-r-none'/>
          <div className='bg-cyan-500 h-[30%] w-full flex justify-between rounded-b-xl md:rounded-r-xl md:rounded-l-none md:h-full'>
            <div className='my-auto ml-3 text-white'>Kuari Pass Trek</div>
            <img src={next} alt="" className='w-[10%] h-[40%] my-auto'/>
          </div>
        </div>
        <div className='w-[5%] my-auto' onClick={clickFront}>
          <img src={forwardImg} alt="" />
        </div>
      </div>
    </div>
  )
}
