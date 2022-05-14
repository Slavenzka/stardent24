import React from 'react'
import css from './AboutUsDocuments.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import withModal from 'hoc/withModal'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import AboutAside from 'components/AboutAside/AboutAside'
import TestBanner from 'components/TestBanner/TestBanner'
import DocumentsList from 'Pages/AboutUsDocuments/DocumentsList/DocumentsList'
import { documentsData } from 'Pages/AboutUsDocuments/_assets/data'

const AboutUsDocuments = () => {
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
      label: 'Правовые документы'
    }
  ]

  return (
    <>
      <Banner {...documentsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <TwoColumns
          classWrapper={css.content}
          main={<DocumentsList list={documentsData.list} />}
          aside={<AboutAside />}
        />
      </Container>
     <TestBanner />
    </>
  )
}

export default withModal(AboutUsDocuments)
