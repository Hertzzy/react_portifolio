import { useState, React } from 'react'
import './App.css'
import Navbar from './components/navbar';

import homepage from './assets/imgs/homepage.jpg'
import AppRoutes from './AppRoutes';


function App() {
  return (
    <>
      <div className='homege'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
