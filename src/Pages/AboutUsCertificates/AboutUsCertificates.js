import React from 'react'
import css from './AboutUsCertificates.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import withModal from 'hoc/withModal'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import TwoColumns from 'components/TwoColumns/TwoColumns'
import AboutAside from 'components/AboutAside/AboutAside'
import CertificatesList from 'Pages/AboutUsCertificates/CertificatesList/CertificatesList'
import TestBanner from 'components/TestBanner/TestBanner'
import { certificatesData } from 'Pages/AboutUsCertificates/_assets/data'

const AboutUsCertificates = () => {
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
      label: 'Лицензии и сертификаты'
    }
  ]

  return (
    <>
      <Banner {...certificatesData.banner} className={css.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <TwoColumns
          classWrapper={css.content}
          main={<CertificatesList list={certificatesData.list} />}
          aside={<AboutAside />}
        />
      </Container>
     <TestBanner />
    </>
  )
}

export default withModal(AboutUsCertificates)
