import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ActiveContextProvider from './context/active-section'

createRoot(document.getElementById('root')).render(
  <ActiveContextProvider>
    <App />
  </ActiveContextProvider>
)
