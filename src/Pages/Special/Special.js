import React, { useMemo } from 'react'
import css from './Special.module.scss'
import Banner from 'components/Banner/Banner'
import SpecialDescription from 'Pages/Special/SpecialDescription/SpecialDescription'
import Container from 'components/Grid/Container'
import { HOME_PAGE, SPECIALS } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import PromoBlock from 'containers/PromoBlock/PromoBlock'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { specialData } from 'Pages/Special/_assets/data'

const Special = () => {
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
        <Banner {...data[id].banner} />
        <Container className={css.container}>
          <Breadcrumbs dataArray={breadcrumbs} />
          <SpecialDescription {...data[id].special} />
          <PromoBlock
            className={css.promo}
            title='Также вам может быть интересно'
            activeId={id}
          />
        </Container>
      </>
    )
  }, [data, id, breadcrumbs])
}

export default Special
