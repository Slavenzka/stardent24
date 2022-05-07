import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link } from 'react-router-dom'
import {
  ABOUT_CERTIFICATES, ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US, CONTACTS,
  DOCTORS,
  HOME_PAGE,
  PRICES, REVIEWS,
  SPECIALS
} from 'Pages/Routes'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'
import { useDispatch } from 'react-redux'
import { openContentModal } from 'store/actions/ui'
import ModalReview from 'components/ModalReview/ModalReview'
import logo from 'assets/images/logo.png'

const Header = () => {
  const headerData = {
    withSearch: true,
    schedule: 'с&nbsp;9:00 до&nbsp;18:00, воскресенье&nbsp;&mdash; выходной',
    phones: ['+7 (499) 136 87 77'],
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
          <img
            className={css.iconLogo}
            src={logo}
            alt="Stardent24 logo"
          />
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
