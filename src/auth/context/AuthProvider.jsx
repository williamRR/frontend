// import { useState } from 'react'
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types'

// Inicializa el valor de dark desde el localStorage
const localStorageDark = () => {
  const doc = document.documentElement
  const isDark = localStorage.getItem('dark') === 'true'

  isDark ? doc.classList.add('dark') : doc.classList.remove('dark')

  // Si el valor de dark es true en el localStorage
  return {
    dark: localStorage.getItem('dark') === 'true',
  }
}

export const AuthProvider = ({ children }) => {

  // const [dark, setDark] = useState()
  const [authState, dispatch] = useReducer(authReducer, {}, localStorageDark)


  const modeDark = () => {
    const doc = document.documentElement

    // Si el valor de dark es true en el localStorage
    if (authState.dark === true) {
      localStorage.setItem('dark', false)
      doc.classList.remove('dark')
    } else {
      localStorage.setItem('dark', true)
      doc.classList.add('dark')
    }

    const action = {
      type: types.modeDark,
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, modeDark }}>
      {children}
    </AuthContext.Provider>
  )
}
