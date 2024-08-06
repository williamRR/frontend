// import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

// import { AuthContext } from '../auth'

//  children: es el componente que se va a renderizar
export const PublicRoute = ({ children }) => {
//   const { authState } = useContext(AuthContext)
//   const { logged } = authState

let logged = false;


  // Si no está logueado, renderiza el componente que se le pasa como children (páginas publicas)
  // Si está logueado, redirecciona a la página principal cuando se intente acceder a una página publica como LoginPage
  return !logged ? children : <Navigate to='/' />
}
