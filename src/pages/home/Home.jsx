import React, { useEffect } from 'react'
import Banner from '../../componets/banner/Banner'
import AboutSection from '../../componets/about/AboutSection'
import Services from '../../componets/services/Services'
import WhyChooseUS from '../../componets/why-Choose-Us/WhyChooseUS'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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