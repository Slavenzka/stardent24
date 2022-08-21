import React from 'react'
import css from './AboutUsMobile.module.scss'
import { images } from 'index'
import { HOME_PAGE } from 'Pages/Routes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import AboutContentMobile from './AboutContent/AboutContentMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import { aboutData } from 'Pages/AboutUs/_assets/data'

const AboutUsMobile = () => {
  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'О нас',
    },
  ]

  return (
    <>
      <BannerMobile {...aboutData.banner} />
      <ContainerMobile className={css.container}>
        <AboutContentMobile
          breadcrumbs={breadcrumbs}
          className={css.content}
          data={aboutData.content}
        />
      </ContainerMobile>
      {aboutData.fullScreenPhoto &&
        <img
          className={css.fullscreen}
          src={images('./' + aboutData.fullScreenPhoto.url)}
          alt={aboutData.fullScreenPhoto.description}
        />
      }
      <ContainerMobile>
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
    </>
  )
}

export default AboutUsMobile
