import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import moment_time from 'moment-timezone'

moment_time.tz.setDefault('America/La_Paz');


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
