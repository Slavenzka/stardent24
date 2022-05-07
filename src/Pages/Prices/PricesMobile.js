import React, { useEffect } from 'react'
import css from './PricesMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import { useDispatch } from 'react-redux'
import { saveData } from 'store/actions'
import withModalMobile from 'hoc/withModalMobile'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import PromoBlockMobile from 'containers/PromoBlock/PromoBlockMobile'
import TestBannerMobile from 'components/TestBanner/TestBannerMobile'
import PricesContentMobile from 'Pages/Prices/PricesContent/PricesContentMobile'
import { PRICES_DATA } from 'Pages/Prices/_assets/data'

const PricesMobile = () => {
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
      <BannerMobile {...pricesData.banner} />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <section>
          <PromoBlockMobile className={css.promo} title='Акции' isCompact={true} />
        </section>
        <section className={css.pricelist}>
          <PricesContentMobile className={css.content} />
        </section>
      </ContainerMobile>
    </>
  )
}

export default withModalMobile(PricesMobile)
