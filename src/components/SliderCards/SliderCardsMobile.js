import React from 'react'
import css from './SliderCardsMobile.module.scss'
import classnames from 'classnames'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import PropTypes from 'prop-types'

const SliderCardsMobile = ({
  className,
  children,
  freeMode = true,
  isLoop,
  ...props
 }) => {
  // swiper settings
  const params = {
    slidesPerView: 'auto',
    freeMode: freeMode,
    freeModeSticky: freeMode,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: isLoop
  }

  return (
    <div className={classnames(css.wrapper, className)}>
      <Swiper {...params} {...props}>
        { children }
      </Swiper>
    </div>
  )
}

SliderCardsMobile.propTypes = {
  // Slider slides
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  // External class name for additioinal styles tuning
  className: PropTypes.string,
  // Flag to turn on / off the swiper free mode
  freeMode: PropTypes.bool,
  // Adjustable slides per view quantity
  slides: PropTypes.number,
}

export default React.memo(SliderCardsMobile)
