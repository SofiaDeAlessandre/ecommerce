import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from './context/FirebaseContext.jsx'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
  <CssBaseline>
 <FirebaseProvider>
    <App />
    </FirebaseProvider>
    </CssBaseline>
  </React.StrictMode>,
)
