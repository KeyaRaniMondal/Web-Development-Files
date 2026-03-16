import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Home.jsx'
import axios from 'axios'

const router=createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        index: true,
        element:<Home/>,
        loader:async()=>{
          const res=await axios.get('/apps.json')
          return res.data;
        }
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
