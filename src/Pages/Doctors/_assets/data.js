import { DOCTORS } from 'utils/const'

export const doctorsData = {
  banner: {
    bgImage: 'stardent24__doctors-banner.jpg',
    bgImageTablet: 'stardent24__doctors-banner.jpg',
    bgImageMobile: 'stardent24__doctors-banner.jpg',
    title: 'Врачи',
    descriptor: 'Врач - это человек наполненный состраданием и желанием помочь другим людям'
  },
  list: [
    {
      id: 0,
      name: 'Харитонов Владимир Иванович',
      expertise: 'Cтоматолог-хирург, имплантолог, ортопед',
      address: 'Общая стоматология',
      photo: 'doctors__photo--kharitonov.png',
    },
    {
      id: 1,
      name: 'Харитонов Андрей Иванович',
      expertise: 'Врач стоматолог-терапевт, хирург',
      address: 'Общая стоматология',
      photo: 'doctors__photo--kharitonov2.png',
    },
    {
      id: 2,
      url: DOCTORS,
      name: 'Бозиева Фатима Назировна',
      expertise: 'Врач стоматолог-терапевт',
      address: 'Терапия',
      photo: 'doctors__photo--bozieva.png',
    },
  ]
}