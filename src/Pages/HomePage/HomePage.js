import React from 'react'
import VideoBanner from 'Pages/HomePage/VideoBanner/VideoBanner'
import Services from 'Pages/HomePage/Services/Services'
import ReviewBanner from 'Pages/HomePage/ReviewBanner/ReviewBanner'
import SliderDoctors from 'Pages/HomePage/SliderDoctors/SliderDoctors'
import About from 'Pages/HomePage/About/About'
import Reviews from 'Pages/HomePage/Reviews/Reviews'
import Advantages from 'Pages/HomePage/Advantages/Advantages'
import License from 'Pages/HomePage/License/License'
import withModal from 'hoc/withModal'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const HomePage = () => {
  const homeData = HOME_PAGE_DATA

  return (
    <>
      <h1 className='visuallyHidden'>
        { homeData.siteMainCaption }
      </h1>
      <VideoBanner {...homeData.videoBanner} />
      <Services {...homeData.services} />
      <ReviewBanner {...homeData.reviewBanner} />
      <SliderDoctors {...homeData.sliderDoctors} />
      {/*<TestBanner {...homeData.testBanner} />*/}
      <About {...homeData.about} />
      <Reviews {...homeData.reviews} />
      <Advantages {...homeData.advantages} />
      <License {...homeData.license} />
      {/*<TestBanner {...homeData.testBanner} type='simple' />*/}
    </>
  )
}

export default React.memo(withModal(HomePage))
