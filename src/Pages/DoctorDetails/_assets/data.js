import { doctorsData } from 'Pages/Doctors/_assets/data'

export const data = {
  0: {
    banner: {
      photo: 'doctors__photo--kharitonov.png',
      name: 'Харитонов Владимир Иванович',
      speciality: 'Cтоматолог-хирург, имплантолог, ортопед',
      address: 'Ореховый бульвар 20/2',
      experience: 'Ведет практику с 2009 года'
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Для меня каждый пациент будто нуждающийся в помощи близкий друг или родственник',
        }
      },
      {
        type: 'education',
        title: 'Образование',
        data: {
          list: [
            {
              key: '2019',
              value: 'Квалификация&nbsp;&mdash; &laquo;Врач по&nbsp;специальности стоматология&raquo; Диплом &#8470; ВСГ 3107443 выдан 24.06.2009&nbsp;г. Рег.номер: 6330 Ставропольский государственный медицинский университет'
            },
            {
              key: '2016',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология&nbsp;&mdash; хирургическая&raquo; Сертификат специалиста &#8470;&nbsp;1126240871380 выдан 20.05.2016&nbsp;г. Рег. номер: 15584'
            },
            {
              key: '2012',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология&nbsp;&mdash; ортопедическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;007586 выдан 28.09.2012&nbsp;г. Рег. номер: 0991 Сертификат специалиста &#8470;&nbsp;1126241455861 выдан 06.12.2017&nbsp;г. Рег. номер: 870'
            },
          ]
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(20).fill(``).map((_, index) => ({
            image: `docs/kharitonov/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: 'Татьяна',
              text: 'Попала в&nbsp;клинику случайно, но&nbsp;слава Богу, за&nbsp;это!!! Прекрастное, внимательное отношение, грамотное решение моей проблемы, прекрасно выполненная работа!!!! Огромное спасибо Владимиру Ивановичу и&nbsp;мед. Сестре!!! Очень довольна!',
              specialist: 'Харитонов Владимир Иванович',
              services: 'Лечение кариеса',
            },
            {
              name: 'Елена',
              text: 'Рекомендую! Мило, уютно, с&nbsp;душой! Теперь хожу к&nbsp;зубному как к&nbsp;парикмахеру! Несколько пломб, чистка, большое спасибо врачу Андрею, внимательный, вежливый, профессионал! Муж тоже теперь сюда ходит, хоть и&nbsp;ездим с&nbsp;Коломенской!',
              specialist: 'Харитонов Владимир Иванович',
              services: 'Лечение и протезирование',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 0)
  },
  1: {
    banner: {
      photo: 'doctors__photo--kharitonov2.png',
      name: 'Харитонов Андрей Иванович',
      speciality: 'Общая стоматология',
      address: 'Ореховый бульвар 20/2',
      experience: 'Ведет практику с 2008 года'
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Получаю удовольствие от улыбок и счастливых глаз пациентов, которым смог помочь',
        }
      },
      {
        type: 'education',
        title: 'Образование',
        data: {
          list: [
            {
              key: '2012',
              value: 'Квалификация- &laquo;Стоматология- терапевтическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;730616 выдан 15.09.2012&nbsp;г. Рег. номер: 0945 Сертификат специалиста &#8470;&nbsp;1126241411714 выдан 28.08.2017&nbsp;г. Рег. номер: 613'
            },
            {
              key: '2012',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология&nbsp;&mdash; хирургическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;730513 выдан 15.06.2012&nbsp;г. Рег. номер: 0843 Сертификат специалиста &#8470;&nbsp;1126241306545 выдан 14.06.2017&nbsp;г. Рег.номер: 482'
            },
            {
              key: '2012',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология&nbsp;&mdash; ортопедическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;730615 выдан 15.09.2012&nbsp;г. Рег. номер: 0944 Сертификат специалиста &#8470;&nbsp;1126241306535 выдан 14.06.2017&nbsp;г. Рег. номер:472'
            },
            {
              key: '2008',
              value: 'Квалификация&nbsp;&mdash; &laquo;Врач по&nbsp;специальности стоматология&raquo; Диплом с&nbsp;отличием &#8470; ВСА 0720115 выдан 25.06.2008&nbsp;г. Рег. номер: 6022 Ставропольский государственный медицинский университет'
            },
          ]
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(19).fill(``).map((_, index) => ({
            image: `docs/kharitonov2/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: 'Матвеева Ольга',
              date: `22 сентября 2016 в 14:04`,
              text: 'Уважаемый Андрей Иванович! Благодарю Вас, как руководителя стоматологической клиники, создавшего прекрасное мед. учреждение, в&nbsp;котором чувствуешь себя комфортно с&nbsp;первой минуты посещения и&nbsp;до&nbsp;окончания лечения. А&nbsp;так&nbsp;же за&nbsp;правильный подбор квалифицированного персонала, который который позволяет каждому вашему пациенту чувствовать заботу и&nbsp;внимание. Сердечно благодарю Вас за&nbsp;величайший профессионализм, чуткость, колоссальное терпение и&nbsp;отзывчивость, проявленные вами в&nbsp;процессе моего лечения. Благодаря Вам теперь иду на&nbsp;приём к&nbsp;стоматологу с&nbsp;удовольствием!!! Спасибо за&nbsp;атмосферу тепла и&nbsp;уюта, которая царит в&nbsp;Вашей клинике!!! Добра, здоровья, терпения, всех вам благ!!! Отдельная и&nbsp;огромная благодарность моему лечащему докторум- Тамаре Борисовне. С&nbsp;первых минут посещения и&nbsp;на&nbsp;протяжении всего процесса лечения чувствуется искреннее участие в&nbsp;судьбе пациента. Боль уходит только от&nbsp;Ваших слов и&nbsp;улыбки, от&nbsp;Вашего хорошего отношения. Тамара Борисовна, вы&nbsp;высококвалифицированный специалист своего дела, очень душевный человек. Ваши золотые руки вернули мне вкус к&nbsp;жизни! Спасибо Вам огромное!!! Ваших добрых рук я&nbsp;не&nbsp;забуду, Ваш вселяющий надежду взгляд, Вашу помощь чтоб свершиться чуду, Вашему вниманию каждый рад. Поражает Вае мастерство и&nbsp;необычная сердечность, вместе -это просто волшебство! Низкий Вам поклон за&nbsp;человечность! Вы&nbsp;одна на&nbsp;миллион!!! Спасибо Вам!!! Хочется поблагодарить администратора клиники&nbsp;&mdash; Сергея. Благодаря его умулому и&nbsp;профессиональномуподходу, каждый пациент клиники, переступая её&nbsp;порог чувствует, что он&nbsp;важен, и&nbsp;ему здесь обязательно помогут.Хочется сто раз сказать огромное спасибо за&nbsp;Ваше отношение, заботу и&nbsp;внимание!!',
              specialist: 'Харитонов Андрей Иванович',
              services: 'Лечение зубов',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 1)
  },
  2: {
    banner: {
      photo: 'doctors__photo--bozieva.png',
      name: 'Бозиева Фатима Назировна',
      speciality: 'Терапия',
      address: 'Ореховый бульвар 20/2',
      experience: 'Ведет практику с 2003 года'
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'По себе знаю как сложно, но важно найти время и силы для заботы о здоровье',
        }
      },
      {
        type: 'education',
        title: 'Образование',
        data: {
          list: [
            {
              key: '2018',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология -хирургическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;262405915019 выдан 26.09.2018&nbsp;г. Рег. номер: 567 Сертификат специалиста &#8470;&nbsp;1126241768512 выдан 26.09.2018&nbsp;г. Рег. номер: 1865'
            },
            {
              key: '2010',
              value: 'Квалификация&nbsp;&mdash; &laquo;Стоматология&nbsp;&mdash; терапевтическая&raquo; Диплом о&nbsp;профессиональной переподготовке &#8470;&nbsp;260039 выдан 15.02.2010&nbsp;г. Рег. номер: 0039 Сертификат специалиста &#8470;&nbsp;0177180394406 выдан 28.12.2015&nbsp;г. Рег. номер: 7160'
            },
            {
              key: '2003',
              value: 'Квалификация&nbsp;&mdash; &laquo;Врач по&nbsp;специальности стоматология&raquo; Диплом: ИВС 0140927 выдан 28.06.2003&nbsp;г. Рег. номер:1/03-138 Кабардино-Балкарский Государственный университет'
            },
          ]
        }
      },
    ],
    advised: doctorsData.list.filter(({id}) => id !== 2)
  },
}