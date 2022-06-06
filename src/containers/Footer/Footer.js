import React from 'react'
import classnames from 'classnames'
import css from './Footer.module.scss'
import Container from 'components/Grid/Container'
import IconFacebook from 'assets/icons/IconFacebook'
import IconVK from 'assets/icons/IconVK'
import IconTwitter from 'assets/icons/IconTwitter'
import IconInstagram from 'assets/icons/IconInstagram'
import IconLogoCreator from 'assets/icons/IconLogoCreator'
// import { YMInitializer } from 'react-yandex-metrika'
import { Link } from 'react-router-dom'
import IconTelegram from 'assets/icons/IconTelegram'
import {
  ABOUT_CERTIFICATES,
  ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US,
  CONTACTS,
  DOCTORS,
  POLICY, PRICES,
  REVIEWS,
  SPECIALS
} from 'Pages/Routes'

const Footer = ({ className }) => {
  const footerData = {
    nav: [
      {
        label: 'Услуги и цены',
        sublist: [
          [
            {
              label: 'Консультация',
              url: PRICES
            },
            {
              label: 'Профилактика',
              url: PRICES
            },
          ]
        ]
      },
      {
        label: 'О клинике',
        sublist: [
          [
            {
              label: 'О нас',
              url: ABOUT_US
            },
            {
              label: 'Частые вопросы',
              url: ABOUT_FAQ
            },
          ],
          [
            {
              label: 'Правовые документы',
              url: ABOUT_DOCUMENTS
            },
            {
              label: 'Лицензии и сертификаты',
              url: ABOUT_CERTIFICATES
            },
          ],
        ]
      },
      {
        list: [
          {
            label: 'Акции',
            url: SPECIALS
          },
          {
            label: 'Врачи',
            url: DOCTORS
          },
          {
            label: 'Контакты',
            url: CONTACTS
          },
          {
            label: 'Отзывы',
            url: REVIEWS
          },
        ]
      }
    ],
    social: [
      {
        type: 'telegram',
        url: 'https://t.me/stardent24'
      },
      {
        type: 'vk',
        url: 'https://vk.com/stardent24'
      },
    ],
    companyInfo: {
      startYear: '2008',
      schedule: 'с&nbsp;9:00 до&nbsp;18:00, воскресенье&nbsp;&mdash; выходной',
    },
    siteInfo: {
      links: [
        {
          text: 'Политика конфиденциальности',
          url: POLICY
        },
      ]
    }
  }

  const mainNavContent = footerData.nav.map((item, index) => {
    return (
      <li className={css.navItem} key={index}>
        {item.label &&
        <p className={classnames(css.highlight, css.navLabel)}>
          { item.label }
        </p>
        }
        {item.sublist && item.sublist.map((arr, index) => (
          <ul className={css.navSublist} key={index}>
            {arr.map((item, index) => (
              <li className={css.subItem} key={index}>
                <Link className={css.subLink} to={item.url}>
                  { item.label }
                </Link>
              </li>
            ))}
          </ul>
        ))}
        {item.list &&
        <ul className={css.navSingles}>
          {item.list.map((item, index) => (
            <li className={css.navSingle} key={index}>
              <Link className={classnames(css.highlight, css.navSingleLink)} to={item.url}>
                { item.label }
              </Link>
            </li>
          ))}
        </ul>
        }
      </li>
    )
  })

  const social = (
    <ul className={css.socialList}>
      {footerData.social.map((item, index) => {
        let icon

        switch (item.type) {
          case 'facebook':
            icon = <IconFacebook className={css.iconSocial} />
            break
          case 'vk':
            icon = <IconVK className={css.iconSocial} />
            break
          case 'twitter':
            icon = <IconTwitter className={css.iconSocial} />
            break
          case 'instagram':
            icon = <IconInstagram className={css.iconSocial} />
            break
          case 'telegram':
            icon = <IconTelegram className={css.iconSocial} />
            break
          default:
            return null
        }

        return (
          <li className={css.socialItem} key={index}>
            <a
              className={css.socialLink}
              href={item.url}
              target="_blank" rel="noopener norefferer"
            >
              { icon }
              {`Мы в ${item.type}`}
            </a>
          </li>
        )
      })
      }
    </ul>
  )

  const siteInfoLinks = footerData.siteInfo.links.map((item, index) => (
    <li className={css.auxItem} key={index}>
      <Link className={css.auxLink} to={item.url}>
        { item.text }
      </Link>
    </li>
  ))

  // TODO define which metrics do we use and apply it
  return (
    <footer className={classnames(css.footer, className)}>
      <Container className={css.wrapper}>
        <div className={css.top}>
          <nav className={css.nav}>
            <ul className={css.navList}>
              { mainNavContent }
            </ul>
          </nav>
          <div className={css.info}>
            {footerData.companyInfo.schedule &&
              <div className={css.workTime}>
                <p className={css.highlight}>
                  Время работы
                </p>
                <span
                  className={css.time}
                  dangerouslySetInnerHTML={{ __html: footerData.companyInfo.schedule }}
                />
              </div>
            }
            { social }
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.copyright}>
            <p className={css.label}>
              Разработано:
            </p>
            <a href='/' className={css.copyrightLink}>
              <IconLogoCreator className={css.logo} />
            </a>
          </div>
          <ul className={css.auxList}>
            { siteInfoLinks }
          </ul>
          {/*<div className={css.counter}>*/}
          {/*  <div className={css.metrics}>*/}
          {/*    Some counter*/}
          {/*    /!*<YMInitializer accounts={[31337]} options={{webvisor: true}} version='2' />*!/*/}
          {/*  </div>*/}
          {/*</div>*/}
          <p
            className={css.timeline}
            dangerouslySetInnerHTML={{ __html: `&copy;${footerData.companyInfo.startYear} - ${new Date().getFullYear()}` }}
          />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
