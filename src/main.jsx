import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import toast, { Toaster } from 'react-hot-toast';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/navbar.custom.css'
import '../public/assets/css/HeroArea.custom.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    <App />
  </StrictMode>,
)
