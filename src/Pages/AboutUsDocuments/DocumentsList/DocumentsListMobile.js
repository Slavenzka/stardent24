import React from 'react'
import css from './DocumentsListMobile.module.scss'
import classnames from 'classnames'
import FileMobile from 'components/File/FileMobile'

const DocumentsListMobile = ({
  className,
  list,
}) => {
  const items = list.map((item, index) => (
    <li className={css.item} key={`Certificates list item#${index}`}>
      <FileMobile {...item} />
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

export default DocumentsListMobile
