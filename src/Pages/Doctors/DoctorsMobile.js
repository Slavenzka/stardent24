import React, { useEffect } from 'react'
import css from './DoctorsMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import { useDispatch } from 'react-redux'
import { setDoctorsFilter } from 'store/actions'
import BannerMobile from 'components/Banner/BannerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import DoctorsGalleryMobile from 'Pages/Doctors/DoctorsGallery/DoctorsGalleryMobile'
import { doctorsData } from 'Pages/Doctors/_assets/data'

const DoctorsMobile = () => {
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
      <BannerMobile {...doctorsListData.banner} />
      <div className={css.wrapper}>
        <ContainerMobile>
          <BreadcrumbsMobile dataArray={breadcrumbs} className={css.breadcrumbs} />
          <DoctorsGalleryMobile data={doctorsListData.list} className={css.gallery} />
        </ContainerMobile>
      </div>
    </>
)
}

export default DoctorsMobile
