import { DOCTORS, SPECIALS } from 'utils/const'

export const HOME_PAGE_DATA = {
  siteMainCaption: 'Стоматологическая клиника Stardent24',
  videoBanner: {
    top: {
      slogan: 'Гарантия на&nbsp;все виды работ<br/>в&nbsp;течение 2&nbsp;лет',
      previewLabel: 'Посмотрите видео о клинике',
      modalVideo: 'video-banner__video--modal.mp4',
      modalVideoPreview: 'video-banner__preview.jpg',
    },
    bottom: {
      sloganAdaptive: 'Стоматология для всех',
      sloganDesktop: 'Заботимся о вас и вашей улыбке',
      backgroundMobile: 'bg__video-banner@mobile.jpg',
      backgroundTablet: 'bg__video-banner@tablet.jpg',
      descriptor: 'Индивидуальный подход к&nbsp;каждому пациенту, ответственность, строжайшее соблюдение всех протоколов лечения',
      videoBg: 'video-banner__video.mp4'
    }
  },
  services: {
    title: 'Услуги',
    list: [
      {
        category: 'Имплантация',
        sublist: [
          {
            text: 'Внутрикостная дентальная имплантация'
          },
          {
            text: 'Внутрикостная дентальная имплантация системы Dentium'
          },
          {
            text: 'Внутрикостная дентальная имплантация системы Dentium Super Line'
          },
          {
            text: 'Имплантат «Dentium»'
          },
          {
            text: 'Имплантат «Snucone»'
          },
          {
            text: 'Имплантат «Xive»'
          },
          {
            text: 'Имплантат «Straumann»'
          },
        ]
      },
      {
        category: 'Конусльтация',
        sublist: [
          {
            text: 'Прием (осмотр,консультация) врача-стоматолога первичный'
          },
          {
            text: 'Прием (осмотр,консультация) врача-стоматолога повторный'
          },
          {
            text: 'Прием (осмотр,консультация) врача стоматолога-имплантолога'
          },
          {
            text: 'Осмотр полости рта с помощью дополнительных инструментов с изоляцией системой ОптраГейт.'
          },
          {
            text: 'Термодиагностика зуба'
          },
          {
            text: 'Назначение лекарственных препаратов при заболеваниях полости рта и зубов.'
          },
        ]
      },
      {
        category: 'Терапевтические услуги',
        sublist: [
          {
            text: 'Восстановление зуба пломбой I,V,VI класс по Блэку с использованием материалов из фотополимеров'
          },
          {
            text: 'Наложение временной пломбы'
          },
          {
            text: 'Инструментальная и медикаментозная обработка корневого канала с использованием операционного микроскопа'
          },
          {
            text: 'Восстановление зуба пломбой с нарушением контактного пункта  II,III класса по Блэку с использованием материалов из фотополимеров'
          },
          {
            text: 'Снятие временной пломбы'
          },
          {
            text: 'Восстановление зуба пломбой IV класса по Блэку с использованием материалов из фотополимеров'
          },
          {
            text: 'Избирательное полирование зуба'
          },
          {
            text: 'Инструментальная и медикаментозная обработка корневого канала'
          },
        ]
      },
      {
        category: 'Профилактика',
        sublist: [
          {
            text: 'Обучение гигиене полости рта и зубов индивидуальное,подбор средств и предметов гигиены полости рта.'
          },
          {
            text: 'Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба.'
          },
          {
            text: 'Профессиональная гигиена полости рта и зубов(УЗ)'
          },
          {
            text: 'Чистка зубов системой "AIR FLOW"'
          },
          {
            text: 'Гигиена полости рта ( ультразвук +Air Flow+ фтор лак)'
          },
          {
            text: 'Глубокое фторирование твердых тканей зуба (1 зуб)'
          },
          {
            text: 'Запечатывание фиссуры зуба герметиком'
          },
          {
            text: 'Отбеливание зубов Amazing White'
          },
        ]
      },
    ],
    ads: [
      {
        type: 'implants-jaw',
        url: SPECIALS,
        id: 0,
        color: 'rgb(51, 131, 251)',
        duration: 'Акция до 1 января',
        title: 'Имплантация доступно! Все включено.',
        price: '<span>6 000</span> рублей за все'
      },
      {
        type: 'teeth',
        url: SPECIALS,
        id: 1,
        color: '#f4785d',
        duration: 'До конца года',
        title: 'Профессиональная чистка зубов',
        price: '<span>5 000</span> рублей'
      },
    ]
  },
  reviewBanner: {
    bgImages: {
      mobile: 'stardent24__review-banner.jpg',
      tablet: 'stardent24__review-banner.jpg',
      desktop: 'stardent24__review-banner.jpg'
    },
    quote: 'Всем, кто боится стоматологов, рекомендую посетить Стардент и&nbsp;вы&nbsp;забудете, что такое страх!',
    author: 'пациент Бородина Оксана'
  },
  sliderDoctors: {
    title: 'Врачи',
    list: [
      {
        url: DOCTORS,
        name: 'Харитонов Владимир Иванович',
        expertise: 'Cтоматолог-хирург, имплантолог, ортопед ',
        address: 'Общая стоматология',
        photo: 'doctors__photo--kharitonov.png',
      },
      {
        url: DOCTORS,
        name: 'Харитонов Андрей Иванович',
        expertise: 'Врач стоматолог-терапевт, хирург',
        address: 'Общая стоматология',
        photo: 'doctors__photo--kharitonov2.png',
      },
      {
        url: DOCTORS,
        name: 'Бозиева Фатима Назировна',
        expertise: 'Врач стоматолог-терапевт',
        address: 'Терапия',
        photo: 'doctors__photo--bozieva.png',
      },
    ]
  },
  testBanner: {
    title: 'Не&nbsp;знаете, какая услуга нужна?',
    descriptor: 'Пройдите тест, ответив на&nbsp;несколько вопросов'
  },
  about: {
    title: 'О клинике',
    descriptor: 'Каждый день мы&nbsp;работаем на&nbsp;результат. Строго следуем актуальным международным протоколам лечения и&nbsp;обезболивания.',
    feature: {
      subtitle: 'Безопасность',
      descriptor: '<p>В&nbsp;своей практике неизменно и&nbsp;безукоризненно соблюдаем все гигиенические нормы в&nbsp;работе медицинской организации, работаем на&nbsp;современном и&nbsp;технологичном оборудовании, отвечающем всем требованиям инфекционной безопасности.</p><p>Вас что-то тревожит? Есть вопросы? Звоните, приходите, мы&nbsp;с&nbsp;радостью постараемся развеять ложные опасения или&nbsp;же составим комплекс профилактических мер по&nbsp;минимизации рисков здоровью Ваших зубов.</p>'
    },
    offices: {
      subtitle: 'Наш адрес',
      list: [
        'Москва, Ореховый бульвар 20/2',
      ]
    },
    map: {
      markers: [
        [55.611953, 37.729700],
      ],
      center: [55.611953, 37.729700],
      zoom: 16
    }
  },
  reviews: {
    title: 'Отзывы',
    list: [
      {
        name: 'Татьяна',
        text: 'Попала в&nbsp;клинику случайно, но&nbsp;слава Богу, за&nbsp;это!!! Прекрастное, внимательное отношение, грамотное решение моей проблемы, прекрасно выполненная работа!!!! Огромное спасибо Владимиру Ивановичу и&nbsp;мед. Сестре!!! Очень довольна!',
        specialist: 'Харитонов Владимир Иванович',
        services: 'Лечение кариеса',
        video: 'review__video--1.mp4',
        preview: 'review__video-preview--1.jpg'
      },
      {
        name: 'Матвеева Ольга',
        date: '22 сентября 2016 в 14:04',
        text: 'Уважаемый Андрей Иванович! Благодарю Вас, как руководителя стоматологической клиники, создавшего прекрасное мед. учреждение, в&nbsp;котором чувствуешь себя комфортно с&nbsp;первой минуты посещения и&nbsp;до&nbsp;окончания лечения. А&nbsp;так&nbsp;же за&nbsp;правильный подбор квалифицированного персонала, который который позволяет каждому вашему пациенту чувствовать заботу и&nbsp;внимание. Сердечно благодарю Вас за&nbsp;величайший профессионализм, чуткость, колоссальное терпение и&nbsp;отзывчивость, проявленные вами в&nbsp;процессе моего лечения. Благодаря Вам теперь иду на&nbsp;приём к&nbsp;стоматологу с&nbsp;удовольствием!!! Спасибо за&nbsp;атмосферу тепла и&nbsp;уюта, которая царит в&nbsp;Вашей клинике!!! Добра, здоровья, терпения, всех вам благ!!! Отдельная и&nbsp;огромная благодарность моему лечащему докторум- Тамаре Борисовне. С&nbsp;первых минут посещения и&nbsp;на&nbsp;протяжении всего процесса лечения чувствуется искреннее участие в&nbsp;судьбе пациента. Боль уходит только от&nbsp;Ваших слов и&nbsp;улыбки, от&nbsp;Вашего хорошего отношения. Тамара Борисовна, вы&nbsp;высококвалифицированный специалист своего дела, очень душевный человек. Ваши золотые руки вернули мне вкус к&nbsp;жизни! Спасибо Вам огромное!!! Ваших добрых рук я&nbsp;не&nbsp;забуду, Ваш вселяющий надежду взгляд, Вашу помощь чтоб свершиться чуду, Вашему вниманию каждый рад. Поражает Вае мастерство и&nbsp;необычная сердечность, вместе -это просто волшебство! Низкий Вам поклон за&nbsp;человечность! Вы&nbsp;одна на&nbsp;миллион!!! Спасибо Вам!!! Хочется поблагодарить администратора клиники&nbsp;&mdash; Сергея. Благодаря его умулому и&nbsp;профессиональномуподходу, каждый пациент клиники, переступая её&nbsp;порог чувствует, что он&nbsp;важен, и&nbsp;ему здесь обязательно помогут.Хочется сто раз сказать огромное спасибо за&nbsp;Ваше отношение, заботу и&nbsp;внимание!!',
        specialist: 'Харитонов Андрей Иванович',
        services: 'Лечение зубов',
        video: 'review__video--2.mp4',
        preview: 'review__video-preview--2.jpg'
      },
      {
        name: 'Елена',
        text: 'Рекомендую! Мило, уютно, с&nbsp;душой! Теперь хожу к&nbsp;зубному как к&nbsp;парикмахеру! Несколько пломб, чистка, большое спасибо врачу Андрею, внимательный, вежливый, профессионал! Муж тоже теперь сюда ходит, хоть и&nbsp;ездим с&nbsp;Коломенской!',
        specialist: 'Харитонов Владимир Иванович',
        services: 'Лечение и протезирование',
      },
    ]
  },
  advantages: {
    title: 'Преймущества',
    list: [
      {
        subtitle: 'Гарантии',
        descriptor: 'Даем 2&nbsp;года гарантии на&nbsp;все виды работ. Срок службы пломб, коронок и&nbsp;имплантов бесспорно гораздо дольше и&nbsp;определяется индивидуальными особенностями пациентов. В&nbsp;работе используем надежные немецкие и&nbsp;японские материалы.'
      },
      {
        subtitle: 'Наш опыт',
        descriptor: 'Опыт и&nbsp;квалификация наших врачей помогает подобрать самые быстрые, безболезненные и&nbsp;наименее затратные способы решения проблемы. Мы&nbsp;постоянно осваиваем новые технологии и&nbsp;работаем на&nbsp;современном технологичном оборудовании: например, сами изготавливаем зубные коронки, в&nbsp;сложных случаях проводим лечение с&nbsp;помощью микроскопа.'
      },
      {
        subtitle: 'Максимум комфорта',
        descriptor: 'Безболезненное лечение, индивидуальный план с&nbsp;понятными ценами, уютная атмосфера и&nbsp;приветливый персонал. Мы&nbsp;всегда на&nbsp;связи и&nbsp;стараемся обеспечить пациентам максимум комфорта в&nbsp;процессе нашей работы.'
      },
    ]
  },
  license: {
    title: 'Лицензии',
    list: [
      {
        label: 'Лицензия на осуществление медицинской деятельности',
        previewImage: 'certificate-1.jpg',
        fullImage: 'certificate-1.jpg'
      },
      {
        label: 'Свидетельство о постановке на учет в налоговом органе',
        previewImage: 'certificate-2.jpg',
        fullImage: 'certificate-2.jpg'
      },
      {
        label: 'Сертификат специалиста Стоматология ортопедическая Харитонов А.И.',
        previewImage: 'certificate-3.jpg',
        fullImage: 'certificate-3.jpg'
      },
    ]
  }
}