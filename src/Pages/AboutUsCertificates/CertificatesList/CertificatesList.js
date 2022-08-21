import React from 'react'
import css from './CertificatesList.module.scss'
import classnames from 'classnames'
import Document from 'components/Document/Document'

const CertificatesList = ({
  className,
  list,
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Certificates list item#${index}`}>
      <Document {...item} />
    </li>
  ))

  return (
    <>
      <ul className={classnames(css.list, className)}>
        { items }
      </ul>
    </>
  )
}

export default CertificatesList
