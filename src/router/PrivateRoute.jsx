// import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

// import { AuthContext } from '../auth'

//  children: es el componente que se va a renderizar
export const PrivateRoute = ({ children }) => {
  // const { authState } = useContext(AuthContext)

  const { pathname, search } = useLocation()
  const lastPath = pathname + search

  // Registrar el último path
  localStorage.setItem('lastPath', lastPath)

  // console.log('re-render')
  // const { logged } = authState

  let logged = true;

  // return logged ? children : <Navigate to='login' />
  return logged ? children : <Navigate to='/' />
}
