import { HOME_PAGE_DATA } from 'Pages/HomePage/_assets/data'
import { SPECIALS } from 'Pages/Routes'

export const SPECIALS_DATA = {
  banner: {
    bgImage: 'specials__banner@desktop.jpg',
    title: 'Акции',
    descriptor: 'Предложения действительные на сегодняшний день',
  },
  ads: HOME_PAGE_DATA.services.ads.map(({id, ...item}) => ({
    ...item,
    url: `${SPECIALS}/${id}`
  }))
}