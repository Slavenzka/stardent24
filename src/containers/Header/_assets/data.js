import {
  ABOUT_CERTIFICATES,
  ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US, CONTACTS,
  DOCTORS,
  PRICES,
  REVIEWS,
  SPECIALS
} from 'Pages/Routes'

export const headerData = {
  withSearch: true,
  schedule: 'с&nbsp;9:00 до&nbsp;18:00, воскресенье&nbsp;&mdash; выходной',
  phones: ['+7 (499) 136 87 77'],
  list: [
    {
      text: 'Услуги и цены',
      url: PRICES
    },
    {
      text: 'Акции',
      url: SPECIALS
    },
    {
      text: 'Врачи',
      url: DOCTORS
    },
    {
      text: 'О клинике',
      sublist: [
        {
          text: 'О нас',
          url: ABOUT_US
        },
        {
          text: 'Частые вопросы',
          url: ABOUT_FAQ
        },
        {
          text: 'Лицензии и сертификаты',
          url: ABOUT_CERTIFICATES
        },
        {
          text: 'Правовые документы',
          url: ABOUT_DOCUMENTS
        },
      ]
    },
    {
      text: 'Отзывы',
      url: REVIEWS
    },
    {
      text: 'Контакты',
      url: CONTACTS
    },
  ],
  auxList: [
    {
      text: 'Карта сайта',
      url: '/'
    },
    {
      text: 'Политика конфиденциальности',
      url: '/'
    }
  ]
}