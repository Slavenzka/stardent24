import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link } from 'react-router-dom'
import {
  ABOUT_CERTIFICATES, ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US, ABOUT_VACANCIES, CONTACTS,
  DOCTORS,
  HOME_PAGE,
  MEDIA_CENTER,
  PRICES, REVIEWS,
  SPECIALS
} from 'Pages/Routes'
import IconLogo from 'containers/Header/_assets/IconLogo'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'
import { useDispatch } from 'react-redux'
import { openContentModal } from 'store/actions/ui'
// import ModalAppointment from 'components/ModalAppointment/ModalAppointment'
import ModalReview from 'components/ModalReview/ModalReview'

const Header = () => {
  const headerData = {
    withSearch: true,
    schedule: 'Ежедневно&nbsp;10.00&nbsp;&mdash; 21.00',
    phones: ['+7 495 453 95 93', '+7 495 453 95 93'],
    list: [
      {
        text: 'Услуги и цены',
        url: PRICES
      },
      {
        text: 'Акции',
        url: SPECIALS
      },
      {
        text: 'Врачи',
        url: DOCTORS
      },
      {
        text: 'Медиацентр',
        url: MEDIA_CENTER
      },
      {
        text: 'О клинике',
        sublist: [
          {
            text: 'О нас',
            url: ABOUT_US
          },
          {
            text: 'Частые вопросы',
            url: ABOUT_FAQ
          },
          {
            text: 'Лицензии и сертификаты',
            url: ABOUT_CERTIFICATES
          },
          {
            text: 'Правовые документы',
            url: ABOUT_DOCUMENTS
          },
          {
            text: 'Вакансии',
            url: ABOUT_VACANCIES
          },
        ]
      },
      {
        text: 'Отзывы',
        url: REVIEWS
      },
      {
        text: 'Контакты',
        url: CONTACTS
      },
    ],
    auxList: [
      {
        text: 'Карта сайта',
        url: '/'
      },
      {
        text: 'Политика конфиденциальности',
        url: '/'
      }
    ]
  }

  const dispatch = useDispatch()

  return (
    <header className={css.header}>
      <Intro className={css.top} data={headerData} />
      <Container className={css.desktopWrapper}>
        <Link to={HOME_PAGE} className={css.logo}>
          <IconLogo className={css.iconLogo} />
        </Link>
        <DesktopMenu
          data={headerData}
        />
        <div className={css.btnRegister}>
          <Button
            label='Записаться'
            btnStyle='decorated'
            handleClick={() => {
              dispatch(openContentModal(<ModalReview />))}
            }
          />
        </div>
      </Container>
    </header>
  )
}

export default React.memo(Header)
