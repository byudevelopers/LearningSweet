
import {NET_ID_ENTERED, PASSWORD_ENTERED } from './types'


export const netIdEntered = (text) => {
  const action = {
    type: NET_ID_ENTERED,
    netID: text
  }
  return action
}

export const passwordEntered = (text) => {
  const action = {
    type: PASSWORD_ENTERED,
    password: text
  }
  return action
}
