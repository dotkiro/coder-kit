import store from '../store'
import { types as desktopTypes } from '../store/desktop'

export const showCard  = (appCode: string): void => {
  store.dispatch({
    type: desktopTypes.SHOW_CARD,
    payload: {
      appCode
    }
  })
}

export const hideCard = (index: number): void => {
  store.dispatch({
    type: desktopTypes.HIDE_CARD,
    payload: {
      index
    }
  })
}