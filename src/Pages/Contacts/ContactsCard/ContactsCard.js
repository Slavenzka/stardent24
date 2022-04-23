import React, { useCallback } from 'react'
import css from './ContactsCard.module.scss'
import SliderCards from 'components/SliderCards/SliderCards'
import { images } from 'index'
import Heading from 'components/Heading/Heading'
import classnames from 'classnames'
import IconLocation from 'assets/icons/IconLocation'
import IconClock from 'assets/icons/IconClock'
import IconPhone from 'assets/icons/IconPhone'
import IconMail from 'assets/icons/IconMail'

const ContactsCard = ({
  address,
  city,
  gallery = [],
  mail,
  name,
  phone,
  schedule,
}) => {
  const slides = gallery.map(({ img, label }, index) => (
    <div key={`Contacts slide #${index}`}>
      <img
        className={css.slide}
        src={images('./' + img)}
        alt={label}
      />
    </div>
  ))
  
  const renderSlides = useCallback(data => {
    if (Array.isArray(data) && data.length === 1) {
      return (
        <div>
          <img
            className={css.slide}
            src={images('./' + data[0].img)}
            alt={data[0].label}
          />
        </div>
      )
    }
    
    return (
      <SliderCards>
        {data.map(({ img, label }, index) => (
          <div key={`Contacts slide #${index}`}>
            <img
              className={css.slide}
              src={images('./' + img)}
              alt={label}
            />
          </div>
        ))}
      </SliderCards>
      )
  }, [])

  return (
    <article className={css.wrapper}>
      <div>
        <Heading
          tag='h3'
          content={name}
          type='standard'
        />
        <div className={css.info}>
          <ul className={css.list}>
            {address &&
              <li className={classnames(css.item, css.itemAddress)}>
                <IconLocation className={classnames(css.icon, css.iconLocation)} />
                { address }
              </li>
            }
            {schedule &&
              <li className={classnames(css.item, css.itemSchedule)}>
                <IconClock className={classnames(css.icon, css.iconSchedule)} />
                { schedule }
              </li>
            }
            {phone &&
              <li className={classnames(css.item, css.itemPhone)}>
                <IconPhone className={classnames(css.icon, css.iconPhone)} />
                { phone }
              </li>
            }
          </ul>
          {mail &&
            <a className={classnames(css.item, css.itemEmail)} href={`mailto:${mail}`}>
              <IconMail className={css.icon} />
              { mail }
            </a>
          }
        </div>
      </div>
      { renderSlides(gallery) }
    </article>
  )
}

export default ContactsCard
