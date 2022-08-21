import React from 'react'
import css from './ReviewsPage.module.scss'
import Banner from 'components/Banner/Banner'
import IconArrowRight from 'assets/icons/IconArrowRight'
import { HOME_PAGE } from 'Pages/Routes'
import Container from 'components/Grid/Container'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import withModal from 'hoc/withModal'
import ReviewsContent from 'Pages/ReviewsPage/ReviewsContent/ReviewsContent'
import { reviewsData } from 'Pages/ReviewsPage/_assets/data'

const ReviewsPage = () => {
  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Отзывы'
    }
  ]

  const bannerLink = (
    <button
      className={css.buttonReview}
      onClick={() => {}}
      type='button'
    >
      Оставить отзыв
      <IconArrowRight className={css.bannerIcon} />
    </button>
  )

  return (
    <>
      <Banner
        {...reviewsData.banner}
      />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <ReviewsContent list={reviewsData.list} />
      </Container>
    </>
  )
}

export default withModal(ReviewsPage)
