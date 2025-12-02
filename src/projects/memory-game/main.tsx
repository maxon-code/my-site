import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MemoryGame from './MemoryGame'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryGame />
  </StrictMode>,
)
