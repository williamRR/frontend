import React from 'react'
// si la ruta tiene dashboard cargar el index.css sino el main-tailwind.css
!window.location.pathname.includes('dashboard') ? import('./assets/css/main-tailwind.css') : import('./index.css')
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { IvCaWiCa } from './IvCaWiCa'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IvCaWiCa />
    </BrowserRouter>
  </React.StrictMode>,
)
