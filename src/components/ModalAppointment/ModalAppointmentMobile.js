import React, { useCallback, useState } from 'react'
import css from './ModalAppointmentMobile.module.scss'
import classnames from 'classnames'
import { images } from 'index'
import { useForm } from 'react-hook-form'
import Heading from 'components/Heading/Heading'
import IconLock from 'assets/icons/IconLock'
import InputMobile from 'components/Input/InputMobile'
import ButtonMobile from 'components/Button/ButtonMobile'
import { useDispatch } from 'react-redux'
import { closeModal } from 'store/actions'

const ModalAppointmentMobile = ({
  isWithImage = true
}) => {
  const { register, handleSubmit, errors } = useForm()
  const [isFetching, setFetching] = useState(false)
  const dispatch = useDispatch()
  
  const onSubmit = useCallback(data => {
    setFetching(true)
    
    const {
      [`modal-appointment-name`]: name,
      [`modal-appointment-phone`]: phone
    } = data
    
    fetch(`/mail.php`, {
      method: `POST`,
      body: JSON.stringify({
        name,
        phone
      })
    })
      .then(() => {
        setFetching(false)
        dispatch(closeModal())
      })
  }, [dispatch])

  return (
    <div className={classnames(css.wrapper, { [css.wrapperIllustrated]: isWithImage })}>
      {isWithImage &&
        <img className={css.image} src={images('./modal__appointment@desktop.jpg')} alt='Форма записи на прием' />
      }
      <div className={css.content}>
        <Heading content='Запись на прием' />
        <p className={css.descriptor}>
          Оставьте заявку, мы свяжемся с вами в течение часа
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className={css.fieldset}>
            <InputMobile
              name='modal-appointment-name'
              placeholder='Имя*'
              registration={register({ required: true, minLength: 3, pattern: /^[а-яА-Я]+$/ })}
              inputPalette='light'
            />
            {errors['modal-appointment-name'] &&
            <p className={css.error}>
              Пожалуйста, введите имя, состоящее не менее, чем из трех букв
            </p>
            }
          </fieldset>
          <fieldset className={css.fieldset}>
            <InputMobile
              name='modal-appointment-phone'
              placeholder='Телефон*'
              registration={register({ required: true, minLength: 10, pattern: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im })}
              inputPalette='light'
            />
            {errors['modal-appointment-phone'] &&
              <p className={css.error}>
                Пожалуйста, убедитесь, что введенный телефонный номер содержит не менее 10 знаков и не включает посторонних символов
              </p>
            }
          </fieldset>
          <ButtonMobile
            className={css.button}
            label='Записаться'
            btnStyle='decorated'
            type='submit'
            isLoading={isFetching}
          />
        </form>
        <p className={css.acceptance}>
          <IconLock className={css.icon} />
          <span>
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с политикой конфиденциальности ознакомлен
          </span>
        </p>
      </div>
    </div>
  )
}

export default ModalAppointmentMobile
