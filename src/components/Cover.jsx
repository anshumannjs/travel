import React from 'react'
import { useEffect,useState,useRef } from 'react'
import '../App.css';
import img from './3051421.jpeg'

export default function Cover(props) {

    if (props.name=='home'){
        return (
            <div>
                <img src={img} alt="" className='object-contain'/>
                <div className='flex absolute top-8'>
                <div className=''>
                    <div className={`text-animate font-bold text-5xl md:text-8xl lg:text-9xl text-cyan-500`}>
                        Travel
                    </div>
                    <div className='text-animate font-bold text-5xl md:text-8xl lg:text-9xl text-cyan-500'>
                        &
                    </div>
                    <div className='text-animate font-bold text-5xl md:text-8xl lg:text-9xl text-cyan-500'>
                        Trek
                    </div>
                </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <img src={props.img} alt="" className='object-contain w-full'/>
                <div className='flex absolute top-8'>
                <div className=''>
                    <div className={`text-animate font-bold text-5xl md:text-8xl lg:text-9xl text-cyan-500 my-20`}>
                        {props.name}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
