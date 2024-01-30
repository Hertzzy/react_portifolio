import { useState, React } from 'react'
import './App.css'
import Navbar from './components/navbar';

import homepage from './assets/imgs/homepage.jpg'
import AppRoutes from './AppRoutes';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <>
      <div className='homege'>
        <AppRoutes />
      </div>
    </>
  )
}

export default App
