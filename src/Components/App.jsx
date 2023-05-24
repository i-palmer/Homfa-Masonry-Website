import '../index.css'
import * as React from 'react';
import ChooseMe from './ChooseMe';
import AboutMe from './AboutMe';
import Navbar from './Navbar'

export default function App() {
  return (
    <div className="mb-[25px]">
      <div className="bg-[#1A1E23]">
        <Navbar/>
        <AboutMe/>
      </div>
        <ChooseMe/>
    </div>
  ); 
}