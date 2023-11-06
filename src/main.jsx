import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myCreateRoute from './components/Router/Route'
import './index.css'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreateRoute}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
