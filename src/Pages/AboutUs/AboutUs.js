import React from 'react'
import css from './AboutUs.module.scss'
import Container from 'components/Grid/Container'
import Banner from 'components/Banner/Banner'
import { images } from 'index'
import SidePromo from 'containers/SidePromo/SidePromo'
import AboutContent from 'Pages/AboutUs/AboutContent/AboutContent'
import { HOME_PAGE } from 'Pages/Routes'
import LinksBattery from 'components/LinksBattery/LinksBattery'
import withModal from 'hoc/withModal'
import { aboutData } from 'Pages/AboutUs/_assets/data'

const AboutUs = () => {
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
      <Banner {...aboutData.banner} />
      <Container className={css.container}>
        <AboutContent
          breadcrumbs={breadcrumbs}
          className={css.content}
          data={aboutData.content}
        />
        <aside className={css.side}>
          <div className={css.sticky}>
            <LinksBattery />
            <SidePromo />
          </div>
        </aside>
      </Container>
      {aboutData.fullScreenPhoto &&
        <img
          className={css.fullscreen}
          src={images('./' + aboutData.fullScreenPhoto.url)}
          alt={aboutData.fullScreenPhoto.description}
        />
      }
    </>
  )
}

export default withModal(AboutUs)
