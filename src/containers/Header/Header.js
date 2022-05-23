import React from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import DesktopMenu from './components/DesktopMenu/DesktopMenu'
import Button from 'components/Button/Button'
import Intro from 'containers/Header/components/Intro/Intro'
import { useDispatch } from 'react-redux'
import { openContentModal } from 'store/actions/ui'
import logo from 'assets/images/logo.png'
import { headerData } from 'containers/Header/_assets/data'
import ModalAppointment from 'components/ModalAppointment/ModalAppointment'

const Header = () => {
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
              dispatch(openContentModal(<ModalAppointment />))}
            }
          />
        </div>
      </Container>
    </header>
  )
}

export default React.memo(Header)
