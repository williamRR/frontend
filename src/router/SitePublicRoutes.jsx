import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { EventOverviewPage, IndexPage, LoginPage, NotFoundPage } from '../pages'

export const SitePublicRoutes = () => {
  return (
    <>
      {/* Si la ruta actual es login no cargar el navbar */}
      { window.location.pathname !== '/login' && <Navbar />}


      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='index' element={<IndexPage />} />
        <Route path='event-overview' element={<EventOverviewPage />} />
        <Route path='404' element={<NotFoundPage />} />

        <Route path='/' element={<Navigate to='index' replace/>} />

        <Route path='/*' element={<Navigate to='404' replace/>} />
      </Routes>
    </>
  )
}
