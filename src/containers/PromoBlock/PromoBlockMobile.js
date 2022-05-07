import React from 'react'
import css from './PromoBlockMobile.module.scss'
import PromoListMobile from 'components/PromoList/PromoListMobile'
import Heading from 'components/Heading/Heading'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const PromoBlockMobile = ({ className, title = 'Акции', isCompact, activeId }) => {
  const promoData = HOME_PAGE_DATA.services.ads.filter(({id}) => `${id}` !== activeId)


  return (
    <div className={className}>
      <Heading content={title} type='standard' />
      <PromoListMobile data={promoData} className={css.promo} isCompact={isCompact} />
    </div>
  )
}

export default PromoBlockMobile
