import React from 'react'
import pickUp from './istockphoto-614316294-612x612.jpg'
import next from './130884.png'
import { useNavigate } from 'react-router-dom';
import { Obj } from './Explore/CityObj';
import { useSelector,useDispatch } from 'react-redux';
import { newCity } from '../Redux States/CityInfo';

export default function Container(props) {
    const dispatch=useDispatch();
    
    
    const navigate=useNavigate();
    function destinationClicker(){
        let ans=props.city.split(" ").join("")
        dispatch(newCity(Obj[ans]))
        props.setCity(ans);
        navigate(`/${ans}`);
    }

    if (props.type=='service'){
        return (
            <div className='w-[18%] border-gray-400 border flex flex-col rounded-lg hover:cursor-pointer'>
                <img src={props.img} alt="" className='h-[70%] w-[100%] rounded-t-lg' />
                <div className='p-3 space-y-3 mt-0'>
                    <h1 className='text-center text-fuchsia-500 font-bold'>{props.name}</h1>
                    <p className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut facilis ipsam velit tenetur unde necessitatibus neque provident atque? Adipisci suscipit commodi laborum provident autem sequi molestias quaerat vitae rem.</p>
                </div>
                <hr className=' w-[90%] border-fuchsia-500 m-auto' />
                <div className='text-end font-bold text-xl relative bottom-0 mt-5 rounded-b-lg flex justify-between'>
                    <div className='text-fuchsia-500'>Explore</div>
                    <img src={next} alt="" className='w-[10%] h-[70%] my-auto'/>
                </div>
            </div>
        )
    }
    else if (props.type=='destination'){
        return(
            <div onClick={destinationClicker} className='w-[90%] h-40 md:h-60 lg:h-96 m-auto border border-black rounded-lg'>
                <img src={Obj[props.city.split(" ").join("")].image} alt="" className='h-[80%] w-full rounded-t-lg'/>
                <div className='w-full h-[20%] flex justify-between'>
                    <div>
                        {props.city}
                    </div>
                    <img src={next} alt="" className='w-[10%] h-[70%] my-auto'/>
                </div>
            </div>
        )
    }
}
