import React from 'react';
import {   Routes, Route } from 'react-router-dom';
import Layout from './Layout.js';
import Home from './Pages/Home.js';
import Car from './Pages/Insurance/Car/Car.js'
import Bike from './Pages/Insurance/bike/Bike.js'
import Term from './Pages/Insurance/Term.js'; 

import Investment from './Pages/Insurance/Investment.js';
import AdvisorInBengalore from './Pages/InsuranceAdvisors/AdvisorInBengalore.js';
import AdvisorInChennai from './Pages/InsuranceAdvisors/AdvisorInChennai.js';
import AdvisorInKolkatta from './Pages/InsuranceAdvisors/AdvisorInKolkatta.js';
import AdvisorInMumbai from './Pages/InsuranceAdvisors/AdvisorInMumbai.js';
import AdvisorInNewDelhi from './Pages/InsuranceAdvisors/AdvisorInNewDelhi.js';
import AdvisorInPune from './Pages/InsuranceAdvisors/AdvisorInPune.js';
import CarNews from './Pages/News/CarNews.js';
import BikeNews from './Pages/News/BikeNews.js';
import HealthNews from './Pages/News/HealthNews.js';
import TermNews from './Pages/News/TermNews.js';
import InvestmentNews from './Pages/News/InvestmentNews.js'
import Download from './Pages/Support/Download.js';
import PaymentHistory from './Pages/Support/paymentHistory.js';
import LoginSignUp from './Pages/LoginSignup.js';
import AdminDashboard from './Pages/AdminDashboard.js';
import HealthBanner from './Components/HealthBanner'
import BookHomeVisit from './Components/BookHomeVisit'
import TermBannerPage from './Components/TermBannerPage'
import Health from './Pages/Insurance/Health.js'


function App() {
  return (
    
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/healthBanner" element={<HealthBanner />} />
        <Route path="/book-home-visit" element={<BookHomeVisit />} />
        <Route path="/term-banner" element={<TermBannerPage />} />
        <Route index element={<Home />} />
        <Route path='/Car' element={<Car/>}/>
        <Route path='/Bike' element={<Bike/>}/>
        <Route path='/Term' element={<Term/>}/>
        <Route path='/Health' element={<Health/>}/>
        
        <Route path='/Investment' element={<Investment/>}/>

          <Route path='/AdvisorInNewDelhi' element={<AdvisorInNewDelhi/>}/>
           <Route path='/AdvisorInChennai' element={<AdvisorInChennai/>}/>
            <Route path='/AdvisorInMumbai' element={<AdvisorInMumbai/>}/>
             <Route path='/AdvisorInBengalore' element={<AdvisorInBengalore/>}/>
              <Route path='/AdvisorInPune' element={<AdvisorInPune/>}/>
               <Route path='/AdvisorInKolkatta' element={<AdvisorInKolkatta/>}/>


        <Route path='/CarNews' element={<CarNews/>}/>
        <Route path='/BikeNews' element={<BikeNews/>}/>
        <Route path='/TermNews' element={<TermNews/>}/>
        <Route path='/HealthNews' element={<HealthNews/>}/>
        <Route path='/InvestmentNews' element={<InvestmentNews/>}/>

        <Route path='/download' element={<Download/>}/>
<Route path="/admin" element={<AdminDashboard/>}/>

          <Route path="/login" element={<LoginSignUp />} />

        <Route path="/payment-history" element={<PaymentHistory />} />



        </Route>
      </Routes>
    
  );
}

export default App;
