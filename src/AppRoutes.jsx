import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/about'
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/projects'
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path='/contact'
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
