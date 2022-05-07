import React, { useEffect } from 'react'
import css from 'Pages/Doctors/Doctors.module.scss'
import Banner from 'components/Banner/Banner'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import DoctorsGallery from 'Pages/Doctors/DoctorsGallery/DoctorsGallery'
import Container from 'components/Grid/Container'
import { useDispatch } from 'react-redux'
import { setDoctorsFilter } from 'store/actions'
import { doctorsData } from 'Pages/Doctors/_assets/data'

const Doctors = () => {
  const breadcrumbs = [
  {
    label: 'Главная',
      url: HOME_PAGE
  },
  {
    label: 'Врачи'
  }
]

  const doctorsListData = doctorsData

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDoctorsFilter(doctorsListData.list))
  }, [dispatch, doctorsListData.list])

  return (
    <>
      <Banner {...doctorsListData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} className={css.breadcrumbs} />
        <DoctorsGallery data={doctorsListData.list} className={css.gallery} />
      </Container>
    </>
)
}

export default Doctors
