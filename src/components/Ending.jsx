import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YoutubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import BuisnessIcon from '@mui/icons-material/Business'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

export default function Ending() {
  return (
    <div className='flex flex-col border border-black mt-5 bg-fuchsia-500'>
        <div className='flex flex-col space-y-3 mt-5 mb-5'>
            <div className='flex'>
                <BuisnessIcon className='ml-3'></BuisnessIcon>
                <div className='text-white font-bold ml-3'>
                    Bhubaneswar,Odisha,India
                </div>
            </div>
            <div className='flex'>
                <EmailIcon className='ml-3'></EmailIcon>
                <div className='text-white font-bold ml-3'>
                    anshumannarendrajitsingh@gmail.com
                </div>
            </div>
            <div className='flex'>
                <PhoneIcon className='ml-3'></PhoneIcon>
                <div className='text-white font-bold ml-3'>
                    +91 8658159749
                </div>
            </div>
        </div>
        <hr className='border bg-white w-[90%] mx-auto' />
        <div className='flex flex-col space-y-3 mt-5 mb-5'>
            <div className='ml-3 text-white font-bold'>
                Contact Us
            </div>
            <div className='ml-3 text-white font-bold'>
                Privacy Policy
            </div>
        </div>
        <hr className='border bg-white w-[90%] mx-auto' />
        <div className='flex flex-col space-y-3 mt-5'>
            <div className='ml-3 text-white font-bold'>
                Connect With us
            </div>
            <div className='flex justify-between w-[80%] mx-auto'>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <TwitterIcon></TwitterIcon>
                <YoutubeIcon></YoutubeIcon>
            </div>
        </div>
    </div>
  )
}
