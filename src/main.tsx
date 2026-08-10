import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (typeof window !== 'undefined') {
  console.log(
    '%cSELECT curiosity FROM you WHERE tab = \'devtools\';\n%c1 row returned. Try the query console above — real SQL, real data.',
    'font-family: monospace; color: #0f6e5d; font-weight: 600;',
    'font-family: monospace; color: #55677e;',
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
