import React, { useEffect, useState } from 'react'
import css from './ContactsMobile.module.scss'
import { HOME_PAGE } from 'Pages/Routes'
import BannerMobile from 'components/Banner/BannerMobile'
import ContainerMobile from 'components/Grid/ContainerMobile'
import BreadcrumbsMobile from 'components/Breadcrumbs/BreadcrumbsMobile'
import ContactsTabsMobile from 'Pages/Contacts/ContactsTabs/ContactsTabsMobile'
import MapComponentMobile from 'components/Map/MapMobile'
import { contactsData } from 'Pages/Contacts/_assets/data'

const ContactsMobile = () => {
  const breadcrumbs = [
    {
      label: 'Главная',
      url: HOME_PAGE
    },
    {
      label: 'Контакты'
    }
  ]

  const [data, updateData] = useState(null)
  const [selectedCity, updateSelectedCity] = useState({})

  useEffect(() => {
    const structuredAddresses = {}
    const dataFetched = JSON.parse(JSON.stringify(contactsData))
    dataFetched.list.forEach(item => {
      if (!structuredAddresses[item.city]) {
        structuredAddresses[item.city] = []
      }
      structuredAddresses[item.city].push(item)
    })
    if (!data) {
      updateData(structuredAddresses)
      updateSelectedCity(Object.keys(structuredAddresses)[0])
    }
  }, [data, contactsData])

  const pins = contactsData.list.map(item => item.coords)

  return (
    <>
      <BannerMobile {...contactsData.banner} />
      <ContainerMobile className={css.container} isDecorated>
        <BreadcrumbsMobile dataArray={breadcrumbs} />
        {/*<Heading*/}
        {/*  className={css.title}*/}
        {/*  content={contactsData.title}*/}
        {/*  type='standard'*/}
        {/*/>*/}
        <ContactsTabsMobile
          data={data}
          selectedCity={selectedCity}
          updateSelectedCity={updateSelectedCity}
        />
      </ContainerMobile>
      <MapComponentMobile
        {...contactsData.mapSettings}
        marks={pins}
      />
    </>
  )
}

export default ContactsMobile
