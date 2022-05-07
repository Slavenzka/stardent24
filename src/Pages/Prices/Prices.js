import React, { useEffect } from 'react'
import css from './Prices.module.scss'
import Banner from 'components/Banner/Banner'
import Container from 'components/Grid/Container'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import PromoBlock from 'containers/PromoBlock/PromoBlock'
import TestBanner from 'components/TestBanner/TestBanner'
import PricesContent from 'Pages/Prices/PricesContent/PricesContent'
import withModal from 'hoc/withModal'
import { useDispatch } from 'react-redux'
import { saveData } from 'store/actions'
import { PRICES_DATA } from 'Pages/Prices/_assets/data'

const Prices = () => {
  const pricesData = PRICES_DATA

  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Услуги и цены'
    }
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    if (pricesData.list && pricesData.list.length > 0) {
      dispatch(saveData(pricesData.list))
    }
  }, [dispatch, pricesData.list])

  return (
    <>
      <Banner {...pricesData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        {/*<PriceFilters className={css.filters} />*/}
        <section>
          <PromoBlock className={css.promo} title='Акции' isCompact={true} />
        </section>
        <section className={css.pricelist}>
          <PricesContent className={css.content} />
        </section>
      </Container>
      <TestBanner />
    </>
  )
}

export default withModal(Prices)
