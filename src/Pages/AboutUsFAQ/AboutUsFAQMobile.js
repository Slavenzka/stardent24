import React from 'react'
import css from './AboutUsFAQMobile.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import FaqListMobile from 'Pages/AboutUsFAQ/FaqList/FaqListMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import { faqData } from 'Pages/AboutUsFAQ/_assets/data'

const AboutUsFAQMobile = () => {
  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'О клинике',
      url: ABOUT_US
    },
    {
      label: 'Частые вопросы и ответы'
    }
  ]

  return (
    <>
      <BannerMobile {...faqData.banner} className={css.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <FaqListMobile className={css.list} list={faqData.faqList} />
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
    </>
  )
}

export default AboutUsFAQMobile
