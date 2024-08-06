import { types } from '../types'

const initialState = {
  logged: false,
  dark: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      }

    case types.logout:
      return {
        logged: false,
      }
    case types.modeDark:
      return {
        ...state,
        dark: !state.dark,
      }

    default:
      return state
  }
}
