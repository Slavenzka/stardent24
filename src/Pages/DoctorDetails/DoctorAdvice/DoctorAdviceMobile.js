import React from 'react'
import css from './DoctorAdviceMobile.module.scss'
import { images } from 'index'
import SliderCardsMobile from 'components/SliderCards/SliderCardsMobile'
import { DOCTORS } from 'Pages/Routes'
import { Link } from 'react-router-dom'

const DoctorAdviceMobile = ({
  list
}) => {
  const slides = list.map(({id, ...slide}, index) => (
    <div className={css.slide} key={`Doctor advice slide#${index}`}>
      <Link
        to={`${DOCTORS}/${id}`}
        className={css.card}
        key={`Doctor advice card ${index}`}
      >
        <img src={images('./' + slide.photo)} className={css.photo} alt={`Фото ${slide.name}`} />
        <p className={css.name}>
          { slide.name }
        </p>
        <p className={css.expertise}>
          { slide.expertise }
        </p>
        <p className={css.address} dangerouslySetInnerHTML={{ __html: slide.location }} />
      </Link>
    </div>
  ))

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        Другие специалисты
      </h3>
      <SliderCardsMobile
        className={css.slider}
      >
        { slides }
      </SliderCardsMobile>
    </div>
  )
}

export default DoctorAdviceMobile
