import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Attendence from './Attendence.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Attendence />
  </StrictMode>,
)
