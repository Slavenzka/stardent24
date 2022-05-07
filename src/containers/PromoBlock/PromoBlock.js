import React, { useMemo } from 'react'
import css from './PromoBlock.module.scss'
import Heading from 'components/Heading/Heading'
import PromoList from 'components/PromoList/PromoList'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const PromoBlock = ({ className, title = 'Акции', isCompact, activeId }) => {
  const data = useMemo(() => {
    return HOME_PAGE_DATA.services.ads.filter(({id}) => `${id}` !== activeId)
  }, [activeId])
  
  return (
    <div className={className}>
      <Heading content={title} type='standard' />
      <PromoList
        data={data}
        className={css.promo}
        isCompact={isCompact}
      />
    </div>
  )
}

export default PromoBlock
