import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import axios from 'axios'
import Apps from './Pages/Apps.jsx'
import AppDetails from './Pages/AppDetails.jsx'
import Error from './Pages/Error.jsx'
import Installation from './Pages/Installation.jsx'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get('/apps.json')
          return res.data;
        }
      },
    ]
  },
  {
    path: '/apps',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Apps />,
        loader: async () => {
          const res = await axios.get('/apps.json')
          return res.data;
        }
      },
      {
        path: 'app/:id',
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await axios.get('/apps.json')
          const appId = Number(params.id)
          const app = res.data.find((appdata) => appdata.id === appId)
          return app ?? null;
        }
      }
    ]
  },
  {
    path: '/installation',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Installation />,
        loader: async () => {
          const res = await axios.get('/apps.json')
          return res.data;
        }
      },
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
