import React, { useState } from 'react'
import css from './AccordeonListMobile.module.scss'
import classnames from 'classnames'
import { Collapse } from 'react-collapse/lib/Collapse'
import Button from 'components/Button/Button'
import CollapseTriggerMobile from 'components/CollapseTrigger/CollapseTriggerMobile'
import PropTypes from 'prop-types'
import { openContentModal } from 'store/actions/ui'
import ModalAppointmentMobile from 'components/ModalAppointment/ModalAppointmentMobile'
import { useDispatch } from 'react-redux'

const AccordeonListMobile = ({
  className,
  list
}) => {
  const [activeTab, setActiveTab] = useState(null)
  const dispatch = useDispatch()

  const handleClickTrigger = index => {
    setActiveTab(activeTab === index ? null : index)
  }

  const items = list.map((item, index) => (
    <li className={css.item} key={index}>
      <CollapseTriggerMobile
        isActive={activeTab === index}
        handleClickTrigger={() => handleClickTrigger(index)}
        label={item.category}
      />
      <Collapse isOpened={activeTab === index}>
        <ul className={css.sublist}>
          {item.sublist.map((item, index) => (
            <li className={css.subitem} key={index}>
              { item.text }
            </li>
          ))}
        </ul>
        <Button
          btnStyle='decorated'
          onClick={() => {}}
          label='Записаться'
          className={css.btn}
          handleClick={() => dispatch(openContentModal(<ModalAppointmentMobile />))}
        />
      </Collapse>
    </li>
  ))

  return (
    <ul className={classnames(css.list, className)}>
      { items }
    </ul>
  )
}

AccordeonListMobile.propTypes = {
  // external class name
  className: PropTypes.string,
  // data to render
  list: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      sublist: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string
        })
      )
    })
  )
}

export default React.memo(AccordeonListMobile)
