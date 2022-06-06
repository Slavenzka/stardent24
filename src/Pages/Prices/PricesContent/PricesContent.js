import React, { useCallback, useRef } from 'react'
import css from './PricesContent.module.scss'
import classnames from 'classnames'
import PricesCategory from 'Pages/Prices/PricesCategory/PricesCategory'
import { useSelector } from 'react-redux'

const CATEGORIES_UNCOLLAPSED_BY_DEFAULT = 1

const PricesContent = ({
  className,
}) => {
  const list = useSelector(state => state.data.filteredData)
  const accordionObserver = useRef([])
  
  const addObserver = useCallback(closeAccordion => {
    accordionObserver.current.push(closeAccordion)
  }, [])
  
  const onUncollapse = useCallback(() => {
    accordionObserver.current.forEach(fn => {
      fn()
    })
  }, [accordionObserver])

  const categories = list.map((category, index) => (
    <li className={css.item} key={`Price list category#${index}`}>
      <PricesCategory
        isOpened={index < CATEGORIES_UNCOLLAPSED_BY_DEFAULT}
        addObserver={addObserver}
        onUncollapse={onUncollapse}
        {...category}
      />
    </li>
  ))

  return (
    <ul className={classnames(css.list, className)}>
      { categories }
    </ul>
  )
}

export default PricesContent
