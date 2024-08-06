import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { NotFoundPage } from '../pages'

import { Events } from '../dashboard'

export const InternalPrivateRoutes = () => {
  return (
    <>
      { (!window.location.pathname.includes('dashboard')) && <Navbar /> }

      <Routes>
        {/* <Route path='about' element={<AboutPage />} /> */}
        <Route path='404' element={<NotFoundPage />} />
        <Route path='events' element={<Events />} />

        <Route path='/*' element={<Navigate to='404' replace/>} />
      </Routes>
    </>
  )
}
