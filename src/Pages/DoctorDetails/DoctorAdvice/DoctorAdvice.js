import React from 'react'
import css from './DoctorAdvice.module.scss'
import { createSubArrays } from 'utils'
import SliderCards from 'components/SliderCards/SliderCards'
import { images } from 'index'
import { DOCTORS } from 'Pages/Routes'
import { Link } from 'react-router-dom'

const DoctorAdvice = ({
  list
}) => {
  const slides = createSubArrays(list, 3).map((slide, index) => (
    <div className={css.slide} key={`Doctor advice slide#${index}`}>
      {slide.map(({id, ...item}, subindex) => (
        <Link to={`${DOCTORS}/${id}`} className={css.card} key={`Doctor advice card ${index}-${subindex}`}>
          <img src={images('./' + item.photo)} className={css.photo} alt={`Фото ${item.name}`} />
          <p className={css.name}>
            { item.name }
          </p>
          <p className={css.expertise}>
            { item.expertise }
          </p>
          {item.location && <p className={css.address} dangerouslySetInnerHTML={{__html: item.location}}/>}
        </Link>
      ))}
    </div>
  ))

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        Другие специалисты
      </h3>
      <SliderCards
        className={css.sliderReviews}
        controlsType='styledNoFractions'
        slides={1}
      >
        { slides }
      </SliderCards>
    </div>
  )
}

export default DoctorAdvice
