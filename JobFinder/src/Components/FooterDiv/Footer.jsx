import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-centert'>
        <div>
            <div className='logo'>
                <h1 className='text-[25px] text-white pb-[1.5rem]'>
                    <strong>Job</strong>Finder
                </h1>
            </div>
            <p className='text-white pb-[13px] opacity-70 leading-7'>We always here to find a good job to everyone</p>
        </div>
        
        <div className='grid ml-40'>
            <span className='text-[18px] font-semibold pb-[1.5rem] text-white'>Company</span>
        <div className='grid gap-3'>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >About Us</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >Features</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >News</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >FAQ</li>
        </div>
        </div>

        <div className='grid ml-40'>
            <span className='text-[18px] font-semibold pb-[1.5rem] text-white'>Profile</span>
        <div className='grid gap-3'>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >Trust</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >Community</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >Course</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]' >Motivation</li>
        </div>
        </div>

        <div className='grid ml-40'>
            <span className='text-[18px] font-semibold pb-[1.5rem] text-white'>Contact:</span>
        <div className='grid gap-3'>
             <li className='text-white opacity-[.7] hover:opacity-[1]'>Email: jobfinder@gmail.com</li>
             <li className='text-white opacity-[.7] hover:opacity-[1]'>Mobile: 9234645016</li>

        </div>
        </div>
    </div>
  )
}

export default Footer
