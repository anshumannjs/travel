import React from 'react'
import logo from './logo-social.png'
import cross from './images.png'
import menuLogo from './menu.png'
import { useState,useEffect } from 'react'
import {BrowserRouter as Router , Switch,Route,Link, useLocation} from 'react-router-dom'

export default function Navbar() {
    const [menu,setMenu]=useState(false);
    const [open,setOpen]=useState(false);
    let location=useLocation();

    useEffect(()=>{
        setOpen(false);
            setTimeout(() => {
                setMenu(false);
                
            }, 200);
    },[location])

    useEffect(()=>{
        window.addEventListener('scroll',scrollLevel);
    },[])

    function scrollLevel(){
        if (window.scrollY>=5){
            document.getElementById("main").classList.add("bg-white");
        }
        else {
            document.getElementById("main").classList.remove("bg-white");
        }
    }

    useEffect(()=>{
        if (menu==true){
            document.addEventListener("click",handleClick);
        }
    },[menu])



    function menuClicker(){
        if (menu==true){
            setOpen(false);
            setTimeout(() => {
                setMenu(false);
                
            }, 200);
        }
        else {
            setOpen(true);
            setMenu(true);
        }
    }

    function handleClick(e){
        if (e.path[e.path.length-7].classList[0]!="main"){
            setOpen(false);
            setTimeout(() => {
                setMenu(false);
            }, 200);
        }
    }

    if (menu==true){
        return (
            <div  className={`main fixed flex flex-col w-[50%] z-[20000] bg-white border-black border h-full ${open? 'translate-x':'-translate-x-full'} ease-in-out duration-300`}>
                <div className=''>
                    <img src={logo} alt="" className='w-[50px] h-[50px] m-auto' />
                    <img src={cross} onClick={menuClicker} alt="" className='w-[9px] h-[9px] fixed top-[1%] right-[51%]'/>
                    <div className='font-bold text-cyan-500 text-center'>
                        Travel&trek
                    </div>
                </div>
                <div className='mt-[10%] space-y-1'>
                    <div className='hover:border border-black rounded-sm text-center w-[95%] m-auto text-fuchsia-500 hover:text-white hover:bg-fuchsia-500'>
                        <Link to={'/travel'}>
                            Home
                        </Link>
                    </div>
                    <div className='hover:border border-black rounded-sm text-center w-[95%] m-auto text-fuchsia-500 hover:text-white hover:bg-fuchsia-500'>
                    <Link to={'/explore'}>
                        Explore
                    </Link>
                    </div>
                    <div className='hover:border border-black rounded-sm text-center w-[95%] m-auto text-fuchsia-500 hover:text-white hover:bg-fuchsia-500'>
                        <Link to={'/contactUs'}>
                            Contact Us
                        </Link>
                    </div>
                    <div className='hover:border border-black rounded-sm text-center w-[95%] m-auto text-fuchsia-500 hover:text-white hover:bg-fuchsia-500'>
                        <Link to={'/blog'}>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div id='main' className='main flex fixed border z-[20000] border-none w-[100%]'>
                <img src={menuLogo} onClick={menuClicker} alt="" className='w-[15px] h-[11px] mt-auto mb-auto lg:hidden'/>
                <div className='flex m-auto lg:ml-3'>
                    <img src={logo} alt="" className='w-[25px] h-[25px] mt-1'/>
                    <div className='font-bold mt-auto mb-auto ml-2 text-cyan-500'>
                        Travel&Trek
                    </div>
                </div>
                <div className='hidden lg:flex space-x-3 mr-3 font-semibold'>
                    <div className='hover:text-cyan-500 hover:cursor-pointer'>
                        <Link to={'/travel'}>
                            Home
                        </Link>
                    </div>
                    <div className='hover:text-cyan-500 hover:cursor-pointer'>
                        <Link to={'/explore'}>
                            Explore
                        </Link>
                    </div>
                    <div className='hover:text-cyan-500 hover:cursor-pointer'>
                        <Link to={'contactUs'}>
                            Contact Us
                        </Link>
                    </div>
                    <div className='hover:text-cyan-500 hover:cursor-pointer'>
                        <Link to={'/blog'}>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
