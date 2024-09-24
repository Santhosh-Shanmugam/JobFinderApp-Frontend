import React from 'react'
import {AiOutlineSearch,AiOutlineCloseCircle} from 'react-icons/ai'
import { BsHouseDoor } from "react-icons/bs";
import {CiLocationOn} from 'react-icons/ci'
const Search = () => {
  return (
    <div className='grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
       <form>
           <div className='flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 drop-shadow-greyIsh-700'>
                <div className='flex gap-2 items-center'>
                     <AiOutlineSearch className='text-[25px] icon'/>
                     <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Find Your Job Here...'></input>
                     <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsHouseDoor  className='text-[25px] icon'/>
                     <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Find Your Companies Here...'></input>
                     <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>
                <div className='flex gap-2 items-center'>
                     <CiLocationOn className='text-[25px] icon'/>
                     <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Find Your Location Here...'></input>
                     <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

           </div>
       </form>
       <div className='flex items-center gap-10 justify-center mt-[20px]'>
           <div className='flex items-center gap-2'>
                <label className='text-[#808080] font-semibold'>Sort By:</label>
                <select id='level' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Full-Time</option>
                    <option value="">Part-Time</option>
                    <option value="">Temporary</option>
                    <option value="">Contract</option>
                </select>
           </div>

           <div className='flex items-center gap-2'>
                <label className='text-[#808080] font-semibold'>Sort By:</label>
                <select id='level' className='bg-white rounded-[3px] px-4 py-1'>
                    <option value="">Senior</option>
                    <option value="">Beginner</option>
                    <option value="">Intermediate</option>
                    <option value="">Advocate</option>
                </select>
           </div>
           <button className='bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Clear All</button>
       </div>
    </div>
  )
}

export default Search
