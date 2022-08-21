import React from 'react'
import css from './AboutUsFAQ.module.scss'
import Container from 'components/Grid/Container'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import AboutAside from 'components/AboutAside/AboutAside'
import Banner from 'components/Banner/Banner'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import FaqList from 'Pages/AboutUsFAQ/FaqList/FaqList'
import { faqData } from 'Pages/AboutUsFAQ/_assets/data'

const AboutUsFAQ = () => {
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
      <Banner {...faqData.banner} className={css.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <TwoColumns
          classWrapper={css.content}
          main={<FaqList list={faqData.faqList} />}
          aside={<AboutAside />}
        />
      </Container>
    </>
  )
}

export default AboutUsFAQ
