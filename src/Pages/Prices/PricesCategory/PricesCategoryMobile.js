import React, { useEffect, useState } from 'react'
import css from './PricesCategoryMobile.module.scss'
import { useDispatch } from 'react-redux'
import { openVideoModal } from 'store/actions'
import { Collapse } from 'react-collapse/lib/Collapse'
import classnames from 'classnames'
import TableRowMobile from 'components/TableRow/TableRowMobile'
import ButtonPlayMobile from 'components/ButtonPlay/ButtonPlayMobile'

const PricesCategoryMobile = ({
  category,
  sublist,
  isOpened,
  onUncollapse,
  addObserver
}) => {
  const dispatch = useDispatch()
  const [isCollapseOpened, updateCollapseStatus] = useState(isOpened)
  
  useEffect(() => {
    addObserver(() => updateCollapseStatus(false))
  }, [addObserver])
  
  const items = sublist.map(({ subcategory, services }, index) => {
    const serviceItems = services.map(({ label, video, price }, rowIndex) => (
      <TableRowMobile
        keyClassName={css.rowKey}
        valueClassName={css.rowValue}
        cellKey={(
          <div className={css.key}>
            <span className={css.label}>
              { label }
            </span>
            {video &&
              <ButtonPlayMobile
                className={css.buttonPlay}
                handleClick={() => dispatch(openVideoModal(video))}
                isMinified
              />
            }
          </div>
        )}
        className={css.row}
        cellValue={price ? `${price} &#x20BD;` : null}
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
      </Collapse>
    </>
  )
}

export default PricesCategoryMobile
