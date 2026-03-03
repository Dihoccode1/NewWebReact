import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./public/bootstrap/css/bootstrap.min.css"
import "./public/fontawesome/css/all.min.css"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
