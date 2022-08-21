import React, { useCallback, useRef } from 'react'
import css from './PricesContentMobile.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import PricesCategoryMobile from 'Pages/Prices/PricesCategory/PricesCategoryMobile'

const CATEGORIES_UNCOLLAPSED_BY_DEFAULT = 1

const PricesContentMobile = ({
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
      <PricesCategoryMobile
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

export default PricesContentMobile
