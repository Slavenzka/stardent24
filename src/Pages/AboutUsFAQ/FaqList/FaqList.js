import React from 'react'
import css from './FaqList.module.scss'
import Accordeon from 'components/Accordeon/Accordeon'

const FaqList = ({
  list = []
}) => {
  const observer = []

  const items = list.map(({ key, value }, index) => (
    <li className={css.item} key={index}>
      <Accordeon
        question={key}
        answer={value}
        observer={observer}
      />
    </li>
  ))

  if (!list || list.length === 0) {
    return null
  }

  return (
    <>
      <ul className={css.list}>
        { items }
      </ul>
    </>
  )
}

export default FaqList
