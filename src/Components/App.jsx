import '../index.css'
import * as React from 'react';
import ChooseMe from './ChooseMe';
import AboutMe from './AboutMe';
import Navbar from './Navbar'
import MyWork from './MyWork';

export default function App() {
  return (
    <div className="mb-[25px] bg-[#F7F7F7]">
      <div className="bg-[#1A1E23]">
        <Navbar/>
        <AboutMe/>
      </div>
        <ChooseMe/>
        <MyWork />
    </div>
  ); 
}