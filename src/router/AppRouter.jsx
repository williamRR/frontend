import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { SitePublicRoutes } from './SitePublicRoutes'
import { InternalPrivateRoutes } from './InternalPrivateRoutes'

// import { LoginPage } from '../auth' // Importar el sitio inicial al publico sin login
// import { HeroesRoutes } from '../heroes' // Importar rutas internas (rutas publicas + internas del tipo de usuario)

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/*'
          element={
            <PublicRoute>
              <SitePublicRoutes />
            </PublicRoute>
          }
        />

        <Route
          path='/dashboard/*'
          element={
            <PrivateRoute>
              <InternalPrivateRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
