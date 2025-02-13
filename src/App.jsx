import React from 'react'
import Navbar from './component/layout/navbar/Navbar'
import Header from './component/layout/header/Header'
import Slider from './component/common/Slider'
import ScrollToTop from './component/common/ScrollToTop'
import Statistics from './component/Statistics'
import GetInvolved from './component/GetInvolved'
import Carddata from './component/Carddata'
import LanguageSelector from './component/LanguageSelector'
import Cards from './component/cards/cards'
import GoCard from './component/gocard/goCard'
import VideoPage from './component/videopage/videopage'
import Footer from './component/layout/footer/Footer'
import Contact from './component/Contact/Contact'
import AboutUs from './component/About/About'

const App = () => {
  return (
    <div>

      <Navbar />
      <Header />
      <Slider />
      <Statistics />
      <Cards />
      <div
        className=" bg-no-repeat h-[calc(100%)]"

        style={{
          backgroundImage: "url('/common/bgimg.png')",
          // backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >

        <GetInvolved />
        <Carddata />
      </div>
      <GoCard />
      <VideoPage />

      <div className='relative z-50'>

        <ScrollToTop />
      </div>
      {/* <AboutUs /> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
