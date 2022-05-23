import React from 'react'
import VideoBannerMobile from 'Pages/HomePage/VideoBanner/VideoBannerMobile'
import ServicesMobile from 'Pages/HomePage/Services/ServicesMobile'
import ReviewBannerMobile from 'Pages/HomePage/ReviewBanner/ReviewBannerMobile'
import SliderDoctorsMobile from 'Pages/HomePage/SliderDoctors/SliderDoctorsMobile'
import AboutMobile from 'Pages/HomePage/About/AboutMobile'
import ReviewsMobile from 'Pages/HomePage/Reviews/ReviewsMobile'
import AdvantagesMobile from 'Pages/HomePage/Advantages/AdvantagesMobile'
import LicenseMobile from 'Pages/HomePage/License/LicenseMobile'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const HomePageMobile  = () => {
  const homeData = HOME_PAGE_DATA

  return (
    <main>
      <h1 className='visuallyHidden'>
        { homeData.siteMainCaption }
      </h1>
      <VideoBannerMobile {...homeData.videoBanner} />
      <ServicesMobile {...homeData.services} />
      <ReviewBannerMobile {...homeData.reviewBanner} />
      <SliderDoctorsMobile {...homeData.sliderDoctors} />
      <AboutMobile {...homeData.about} />
      <ReviewsMobile {...homeData.reviews} />
      <AdvantagesMobile {...homeData.advantages} />
      <LicenseMobile {...homeData.license} />
    </main>
  )
}

export default React.memo(HomePageMobile)
