import { useState, React } from 'react'
import './App.css'
import Navbar from './components/navbar';

import homepage from './assets/imgs/homepage.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      <div className='homege'>
        <Navbar />

        <img src={homepage} alt="" className='h-1/3' />
      </div>
    </>
  )
}

export default App
