import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { App } from './App.js'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
}
