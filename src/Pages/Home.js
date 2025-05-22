import React from 'react'

import Banner from '../Components/Banner.js'
import Cards from '../Components/Cards.js'
import Benfits from '../Components/Benfits/Benfits.js'
import InsuranceWorks from '../Components/Benfits/InsuranceWorks/InsuranceWorks.js'
import InsurancePartner from '../Components/InsurancePartner/InsurancePartner.js'
import CustomerSpeak from '../Components/CusotmerSpeak.js/CustomerSpeak.js'
import About from '../Components/About/About.js'
import Footer from '../Components/Footer/Footer.js'
import Footer2 from '../Components/Footer2/Footer2.js'
import Footer3 from '../Components/Footer3/Footer3.js'


function Home() {
  return (
    <div>
    
      <Banner/>
      <Cards/>
      <Benfits/>
      <InsuranceWorks/>
      <InsurancePartner/>
      <CustomerSpeak/>
      <About/>
      <Footer/>
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default Home
