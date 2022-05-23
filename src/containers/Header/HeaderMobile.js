import React, { useState } from 'react'
import classnames from 'classnames'
import css from './HeaderMobile.module.scss'
import { Link, withRouter } from 'react-router-dom'
import { HOME_PAGE } from 'Pages/Routes'
import IconBurger from 'containers/Header/_assets/IconBurger'
import AdaptiveMenu from './components/AdaptiveMenu/AdaptiveMenu'
import ContainerMobile from 'components/Grid/ContainerMobile'
import logo from 'assets/images/logo.png'
import { headerData } from 'containers/Header/_assets/data'

const HeaderMobile = (props) => {
  const [isAdaptiveMenuVisible, setAdaptiveMenuStatus] = useState(false)
  const location = props.location.pathname
  const handleBurgerClick = () => {
    setAdaptiveMenuStatus(true)
  }

  const handleCloseMenu = () => {
    setAdaptiveMenuStatus(false)
  }

  return (
    <header className={classnames(css.header, { [css.headerTabletTransparent]: location === HOME_PAGE })}>
      <ContainerMobile>
        <div className={css.wrapper}>
          <Link to={HOME_PAGE} className={css.logo}>
            <img
              className={css.iconLogo}
              src={logo}
              alt="Stardent24 logo"
            />
          </Link>
          {/*{withSearch &&*/}
          {/*  <button className={css.search} type='button'>*/}
          {/*    Поиск по сайту*/}
          {/*    <IconSearch className={css.iconSearch} />*/}
          {/*  </button>*/}
          {/*}*/}
          <button
            className={classnames(css.burger, { [css.burgerOpened]: isAdaptiveMenuVisible })}
            onClick={handleBurgerClick}
          >
            Бургер управления адаптивным меню
            <IconBurger className={css.iconBurger} />
          </button>
        </div>
        <AdaptiveMenu
          isOpened={isAdaptiveMenuVisible}
          data={headerData}
          handleClose={handleCloseMenu}
        />
      </ContainerMobile>
    </header>
  )
}

export default withRouter(HeaderMobile)
