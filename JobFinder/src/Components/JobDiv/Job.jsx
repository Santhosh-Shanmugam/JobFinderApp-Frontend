import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import { CiApple } from "react-icons/ci";

const Job = () => {

    const data = [     
        {
            id:1,
            title: 'Wed Developer',
            location : 'London',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Apple.Inc'
        },
        {
            id:2,
            title: 'Full Stack Dev',
            location : 'USA',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Blank.Inc'
        },
        {
            id:3,
            title: 'UI Designer',
            location : 'UAE',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Zoho.Inc'
        },
        {
            id:4,
            title: 'UX Designer',
            location : 'London',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Apple.Inc'
        },
        {
            id:5,
            title: 'Cloud Enginer',
            location : 'Canada',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Mr.Hooper Inc'
        },
        {
            id:6,
            title: 'UI/UX Designer',
            location : 'America',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Apple Lunch'
        },
        {
            id:7,
            title: 'Full Stack Engineer',
            location : 'India',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Zoho Inc'
        },
        {
            id:8,
            title: 'Product Designer',
            location : 'India',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Presido.Inc'
        },
        {
            id:9,
            title: 'UI Designer',
            location : 'France',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Apple.Inc'
        },
        {
            id:10,
            title: 'System Designer',
            location : 'Arab',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Crop Inc'
        },
        {
            id:11,
            title: 'Product Designer',
            location : 'India',
            desc : 'Rapidly build modern websites without ever leaving your HTML',
            company : 'Presido.Inc'
        }

    ]
  return (
    <div>
        <h2 className='text-center text-[25px] mt-20'>List of Company Offers</h2>
        <div className='flex gap-10 justify-center flex-wrap items-center py-10'>

            {
                data.map(({id,title,location,desc,company})=>{
                    return  <div key={id} className='w-[250px] p-[20px] bg-white rounded-[10px]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                        <span className='flex items-center text-[#ccc] gap-2'>
                            <BiTimeFive/>Now
                        </span>
                    </span>
                    <h6 className='text-[#211d1d] pt-6'>{location}</h6>
                    <p className='text-[16px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]'>{desc}</p>
        
                    <div className='flex items-center gap-3 mt-2'>
                        <CiApple className='text-[20px]'/>
                        <span>{company}</span>
                    </div>
        
                    <button className='mt-4 border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-blueColor text-white'  >Apply Now!</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Job
