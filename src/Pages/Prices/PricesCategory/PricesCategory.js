import React, { useEffect, useState } from 'react'
import css from './PricesCategory.module.scss'
import TableRow from 'components/TableRow/TableRow'
import ButtonPlay from 'components/ButtonPlay/ButtonPlay'
import { useDispatch } from 'react-redux'
import { openVideoModal } from 'store/actions'
import { Collapse } from 'react-collapse/lib/Collapse'
import classnames from 'classnames'

const PricesCategory = ({
  category,
  sublist,
  isOpened,
  addObserver,
  onUncollapse
}) => {
  const dispatch = useDispatch()
  const [isCollapseOpened, updateCollapseStatus] = useState(isOpened)
  
  useEffect(() => {
    addObserver(() => updateCollapseStatus(false))
  }, [addObserver])

  const items = sublist.map(({ subcategory, services }, index) => {
    const serviceItems = services.map(({ label, video, price, min }, rowIndex) => (
      <TableRow
        cellKey={(
          <>
            <span>
              { label }
            </span>
            {video &&
              <ButtonPlay
                className={css.buttonPlay}
                handleClick={() => dispatch(openVideoModal(video))}
                isMinified
              />
            }
          </>
        )}
        cellValue={price
          ? !Number.isNaN(+price) ? `${min ? `от ` : ``}${(+price).toLocaleString(`ru`)} &#x20BD;` : price
          : null
      }
        index={rowIndex}
        key={`Price list row ${index}-${rowIndex}`}
      />
    ))

    return (
      <li className={css.item} key={`Subcategory item#${index}`}>
        {subcategory &&
          <h3 className={css.subheading}>
            {subcategory}
          </h3>
        }
        <table className={css.table}>
          <tbody>
            { serviceItems }
          </tbody>
        </table>
      </li>
    )
  })

  return (
    <>
      <button
        className={classnames(css.collapseButton,
          { [css.collapseButtonOpened]: isCollapseOpened }
        )}
        type='button'
        onClick={() => {
          onUncollapse && onUncollapse()
          updateCollapseStatus(state => !state)
        }}
      >
        { category }
      </button>
      <Collapse isOpened={isCollapseOpened}>
        <ul className={css.list}>
          { items }
        </ul>
        {/*{sublist.length > 2 && shownItems.length < sublist.length &&*/}
        {/*  <ButtonShowMore*/}
        {/*    className={css.buttonShowMore}*/}
        {/*    clickHandler={() => updateShownItems(() => {*/}
        {/*      const newLength = shownItems.length + 1 >= sublist.length ? sublist.length : shownItems.length + 1*/}
        {/*      return sublist.slice(0, newLength)*/}
        {/*    })}*/}
        {/*  />*/}
        {/*}*/}
      </Collapse>
    </>
  )
}

export default PricesCategory
