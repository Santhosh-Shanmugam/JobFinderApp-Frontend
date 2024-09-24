import React from 'react'
import { CiApple } from "react-icons/ci";
const Value = () => {
  return (
    <div  className="container">
    <h1 className='text-[25px] mt-20 mb-20'>The value that holds us true and to account</h1>
    <div className='grid gap-[10rem] grid-cols-3 items-center border-solid'>
        <div className='rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
                <div className='p-[4px] rounded-[.8rem] bg-[#f3f2ae3] h-[40px] w-[40px] flex items-center justify-center'>
                    <CiApple className='text-[25px]'/>
                </div>
                <span className='font-semibold tect-textColor text-[18px]'>
                    Simplicity
                </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Things beinf made beautiful simple are at the heart of everything
            </p>
        </div>

        <div className='rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
                <div className='p-[4px] rounded-[.8rem] bg-[#f3f2ae3] h-[40px] w-[40px] flex items-center justify-center'>
                    <CiApple className='text-[25px]'/>
                </div>
                <span className='font-semibold tect-textColor text-[18px]'>
                    Simplicity
                </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Things beinf made beautiful simple are at the heart of everything
            </p>
        </div>

        <div className='rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
                <div className='p-[4px] rounded-[.8rem] bg-[#f3f2ae3] h-[40px] w-[40px] flex items-center justify-center'>
                    <CiApple className='text-[25px]'/>
                </div>
                <span className='font-semibold tect-textColor text-[18px]'>
                    Simplicity
                </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Things beinf made beautiful simple are at the heart of everything
            </p>
        </div>
    </div>
    </div>
  )
}

export default Value
