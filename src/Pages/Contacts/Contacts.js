import React, { useEffect, useState } from 'react'
import css from './Contacts.module.scss'
import Container from 'components/Grid/Container'
import { HOME_PAGE } from 'Pages/Routes'
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import ContactsTabs from 'Pages/Contacts/ContactsTabs/ContactsTabs'
import Banner from 'components/Banner/Banner'
import MapComponent from 'components/Map/Map'
import { contactsData } from 'Pages/Contacts/_assets/data'

const Contacts = () => {
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
      <Banner {...contactsData.banner} />
      <Container className={css.container}>
        <Breadcrumbs dataArray={breadcrumbs} />
        <ContactsTabs data={data} selectedCity={selectedCity} updateSelectedCity={updateSelectedCity} />
      </Container>
      <MapComponent
        {...contactsData.mapSettings}
        marks={pins}
      />
    </>
  )
}

export default Contacts
