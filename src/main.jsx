import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './providers/authProvider.jsx'
import Order from './components/Order.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './components/Profile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'orders',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
