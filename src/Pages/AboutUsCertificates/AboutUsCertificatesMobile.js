import React from 'react'
import css from './AboutUsCertificatesMobile.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import CertificatesListMobile
  from 'Pages/AboutUsCertificates/CertificatesList/CertificatesListMobile'
import withModalMobile from 'hoc/withModalMobile'
import { certificatesData } from 'Pages/AboutUsCertificates/_assets/data'

const AboutUsCertificatesMobile = () => {
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
      <BannerMobile {...certificatesData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <CertificatesListMobile className={css.list} list={certificatesData.list} />
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
    </>
  )
}

export default withModalMobile(AboutUsCertificatesMobile)
