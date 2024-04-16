import React from 'react'
import Banner from '../../componets/banner/Banner'
import AboutSection from '../../componets/about/AboutSection'
import Services from '../../componets/services/Services'
import WhyChooseUS from '../../componets/why-Choose-Us/WhyChooseUS'


function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Services />
      <WhyChooseUS />
    </>
  )
}

export default Home