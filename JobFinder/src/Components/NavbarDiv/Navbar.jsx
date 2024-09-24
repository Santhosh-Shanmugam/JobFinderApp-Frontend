import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-[3rem]'>
        <div className='logo'>
              <h1 className='text-[25px] text-blueColor'><strong>Job</strong>Finder</h1>
        </div>
        <div className='flex gap-8 text-[20px] p-3 m-3'>
            <li className='text-black hover:text-blueColor'>Jobs</li>
            <li className='text-black hover:text-blueColor'>About</li>
            <li className='text-black hover:text-blueColor'>Blog</li>
            <li className='text-black hover:text-blueColor'>Companies</li>
            <li className='text-black hover:text-blueColor'>Contact</li>
        </div>
        <div className='gap-8 flex'><button className='p-3 text-white bg-blueColor rounded-3xl w-32'>Login</button>
            <button className='p-3 text-white bg-blueColor rounded-3xl w-32'>SignUp</button>
        </div>
            
    </div>
  )
}

export default Navbar
