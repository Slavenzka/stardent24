export const contactsData = {
  banner: {
    bgImage: 'contacts__banner@desktop.jpg',
    bgImageTablet: 'contacts__banner@desktop.jpg',
    bgImageMobile: 'contacts__banner@desktop.jpg',
    title: 'Как до нас добраться',
    descriptor: 'Мы&nbsp;расположены в&nbsp;шаговой доступности от&nbsp;метро Домодедовская',
  },
  title: 'Филиалы клиники',
  list: [
    {
      name: 'Стардент на Домодедовской',
      city: 'Москва',
      address: 'Ореховый бульвар 20/2',
      coords: [55.611953, 37.729700],
      schedule: 'с 9:00 до 18:00, воскресенье - выходной',
      phone: '+7 (499) 136 87 77',
      mail: 'mail@stardent24.ru',
      gallery: [
        {
          img: 'stardent24__location.jpg',
          label: 'Расположение клиники Stardent'
        },
      ]
    },
  ],
  mapSettings: {
    zoom: 13,
    center: [55.611953, 37.729700]
  }
}