import React from 'react'
import css from 'Pages/AboutUsDocuments/AboutUsDocumentsMobile.module.scss'
import { ABOUT_US, HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import withModalMobile from 'hoc/withModalMobile'
import DocumentsListMobile from 'Pages/AboutUsDocuments/DocumentsList/DocumentsListMobile'
import { documentsData } from 'Pages/AboutUsDocuments/_assets/data'

const AboutUsDocumentsMobile = () => {
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
      <BannerMobile {...documentsData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <DocumentsListMobile className={css.list} list={documentsData.list} />
        <PromoBlockMobile className={css.promo} />
      </ContainerMobile>
    </>
  )
}

export default withModalMobile(AboutUsDocumentsMobile)
