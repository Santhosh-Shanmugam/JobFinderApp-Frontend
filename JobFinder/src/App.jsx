import React from 'react'
import Navbar from './Components/NavbarDiv/Navbar'
import Search from './Components/SearchDiv/Search'
import Job from './Components/JobDiv/Job'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'
import { BrowserRouter, Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
