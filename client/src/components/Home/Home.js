import React from 'react'
import Slider from '../Sliders/Slider'
import Landingpage from '../landingpage/Landingpage'
import Student from '../Students/Student'
import Front from '../Frontpage/Front'
import About from '../About/About'
import './Home.css'

const Home = () => {
  return (
    <>
    <Front/>
    <Landingpage/>
    <Student/>
    <div className="deco">

    <About/>
    </div>
    <Slider/>
    </>
  )
}

export default Home
