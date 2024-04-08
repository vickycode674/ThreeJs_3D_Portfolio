// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom';

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
         <Feedbacks/>
        </div>
        <div className="relative z-0">
          <Contact/>
          {/* <StarCanvas/> */}
        </div>
    </BrowserRouter>

  )
}