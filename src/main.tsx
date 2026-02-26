import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import EcoOknaLanding from './pages/EcoOknaLanding'

const rootElement = document.getElementById('app') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <EcoOknaLanding />
  </React.StrictMode>
)
