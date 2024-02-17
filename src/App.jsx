import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';

export const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
     
      </div>
  )
}
export default App;
