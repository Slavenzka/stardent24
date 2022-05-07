import React from 'react'
import css from './DoctorDetails.module.scss'
import DoctorBanner from './DoctorBanner/DoctorBanner'
import { HOME_PAGE } from 'Pages/Routes'
import Container from 'components/Grid/Container'
import ContentWithSidebar from 'Pages/DoctorDetails/ContentWithSidebar/ContentWithSidebar'
import withModal from 'hoc/withModal'
import DoctorAdvice from 'Pages/DoctorDetails/DoctorAdvice/DoctorAdvice'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import {data} from './_assets/data'

const DoctorDetails = () => {
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
    <section>
      <DoctorBanner
        breadcrumbs={breadcrumbs}
        data={doctorData.banner}
        reviewsQuantity={reviews.data.list.length}
      />
      <Container>
        <ContentWithSidebar
          className={css.content}
          data={doctorData}
        />
        {doctorData.advised && doctorData.advised.length > 0 &&
          <DoctorAdvice list={doctorData.advised} />
        }
      </Container>
    </section>
  )
}

export default withModal(DoctorDetails)
