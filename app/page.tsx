import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Work from './Components/Work'
import Riviews from './Components/Reviews'
import Contact from './Components/Contact'

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Work />
      <Riviews />
      <Contact />
    </div>
  )
}

export default page