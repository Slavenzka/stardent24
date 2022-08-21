import React from 'react'
import css from './ReviewsPageMobile.module.scss'
import IconArrowRight from 'assets/icons/IconArrowRight'
import { HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ReviewsContentMobile from 'Pages/ReviewsPage/ReviewsContent/ReviewsContentMobile'
import withModalMobile from 'hoc/withModalMobile'
import { reviewsData } from 'Pages/ReviewsPage/_assets/data'

const ReviewsPageMobile = () => {
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
      <BannerMobile
        {...reviewsData.banner}
        extraBlock={bannerLink}
      />
      <ContainerMobile className={css.container}>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        <ReviewsContentMobile className={css.content} list={reviewsData.list} />
      </ContainerMobile>
    </>
  )
}

export default withModalMobile(ReviewsPageMobile)
