import React from 'react'
import Navbar from './component/layout/navbar/Navbar'
import Header from './component/layout/header/Header'
import Slider from './component/common/Slider'
import ScrollToTop from './component/common/ScrollToTop'
import Statistics from './component/Statistics'
import GetInvolved from './component/GetInvolved'
import Carddata from './component/Carddata'

const App = () => {
  return (
    <div>

      <Navbar />
      <Header />
      <Slider />
      <Statistics />
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
      <div className='relative z-50'>

        <ScrollToTop />
      </div>

    </div>
  )
}

export default App
