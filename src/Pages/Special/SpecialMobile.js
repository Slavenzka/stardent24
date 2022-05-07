import React, { useMemo } from 'react'
import css from './SpecialMobile.module.scss'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import SpecialDescriptionMobile from 'Pages/Special/SpecialDescription/SpecialDescriptionMobile'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { specialData } from 'Pages/Special/_assets/data'

const SpecialMobile = () => {
  const data = specialData
  const {id} = useParams()
  
  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Акции',
      url: SPECIALS
    },
    {
      label: data?.[id]?.banner.title
    }
  ]

  return useMemo(() => {
    if (!data?.[id]) {
      return (
        <p className={css.empty}>
          По вашему запросу отсутствуют данные
        </p>
      )
    }
  
    return (
      <>
        <BannerMobile {...data[id].banner} />
        <ContainerMobile className={css.container}>
          <BreadcrumbsMobile dataArray={breadcrumbs} />
          <SpecialDescriptionMobile {...data[id].special} />
          <PromoBlockMobile className={css.promo} title='Также вам может быть интересно' activeId={id} />
        </ContainerMobile>
      </>
    )
  }, [data, id, breadcrumbs])
}

export default SpecialMobile
