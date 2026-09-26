import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 961c25dd605c4231363f90f728dd9e961d73b35d
  </StrictMode>,
)
