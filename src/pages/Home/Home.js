import React from 'react'
import Services from '../Services/Services'
import About from './About'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
    </div>
  )
}

export default Home