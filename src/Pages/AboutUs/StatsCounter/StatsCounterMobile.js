import React, { useEffect, useState } from 'react'
import css from './StatsCounterMobile.module.scss'
import { Waypoint } from 'react-waypoint'

const CALCULATION_DURATION = 500

const StatsCounterMobile = ({
  counterData
}) => {
  const { key, unit, value, step = 1 } = counterData
  const [isCounterActive, updateCounterStatus] = useState(false)
  const [counter, updateCounter] = useState({
    value: 0,
    maxValue: key
  })

  useEffect(() => {
    const triggerStatCalculation = counter => {
      let value = 0

      counter = setInterval(() => {
        updateCounter(state => ({
          ...state,
          value
        }))

        if (value >= key) {
          clearInterval(counter)
        }

        value = Math.round((value + step) * 10) / 10
      }, CALCULATION_DURATION / key)
    }

    let counter = null

    if (isCounterActive) {
      triggerStatCalculation(counter)
    }
    return clearInterval(counter)
  }, [isCounterActive, key])

  return (
    <Waypoint
      onEnter={() => updateCounterStatus(true)}
      onLeave={() => updateCounterStatus(false)}
    >
      <div>
        <p className={css.key}>
          <span style={{ width: `${key}`.split('').length * 4 + 'rem' }}>
            { counter.value }
          </span>
          { unit }
        </p>
        <p className={css.value} dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </Waypoint>
  )
}

export default StatsCounterMobile
