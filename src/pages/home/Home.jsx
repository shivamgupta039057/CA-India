import React, { useEffect } from 'react'
import AboutSection from '../../componets/about/AboutSection'
import Services from '../../componets/services/Services'
import WhyChooseUS from '../../componets/why-Choose-Us/WhyChooseUS'
import { useThemeData } from '../../context/Context';


function Home() {
  const { countdata } = useThemeData();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [countdata])

  return (
    <>
      {/* <Banner /> */}
      <AboutSection />
      <Services />
      <WhyChooseUS />
    </>
  )
}

export default Home