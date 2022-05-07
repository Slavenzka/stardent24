import React from 'react'
import css from './DoctorDetailsMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import ContainerMobile from 'components/Grid/ContainerMobile'
import DoctorBannerMobile from './DoctorBanner/DoctorBannerMobile'
import DoctorTopicsMobile from './DoctorTopics/DoctorTopicsMobile'
import withModalMobile from 'hoc/withModalMobile'
import DoctorAdviceMobile from './DoctorAdvice/DoctorAdviceMobile'
import PromoListMobile from 'components/PromoList/PromoListMobile'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { data } from 'Pages/DoctorDetails/_assets/data'
import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'

const DoctorDetailsMobile = () => {
  const {id} = useParams()
  const doctorData = data?.[id]
  
  if (!doctorData) return (
    <p>
      По вашему запросу не найдено врача
    </p>
  )
  
   const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Врачи',
      url: '/doctors'
    },
    {
      label: doctorData.banner.name
    }
  ]

  const reviews = doctorData.content.find(item => item.type === 'reviews')

  return (
    <section className={css.section}>
      <DoctorBannerMobile
        breadcrumbs={breadcrumbs}
        data={doctorData.banner}
        reviewsQuantity={reviews.data.list.length}
      />
      <ContainerMobile className={css.content}>
        <DoctorTopicsMobile
          data={doctorData.content}
        />
        <DoctorAdviceMobile list={doctorData.advised} />
        <div className={css.promoWrapper}>
          <h3 className={css.title}>
            Акции
          </h3>
          <PromoListMobile data={HOME_PAGE_DATA.services.ads} className={css.promo} />
        </div>
      </ContainerMobile>
    </section>
  )
}

export default withModalMobile(DoctorDetailsMobile)
