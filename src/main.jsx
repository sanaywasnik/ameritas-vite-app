import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@awesome.me/kit-5d2be8cfb3/icons/css/all.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
