import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Home.jsx'
import axios from 'axios'
import Apps from './Components/Apps.jsx'

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
      },
    ]
  },
  {
    path: '/apps',
    element: <MainLayout />,
    children:[
      {
        index: true,
        element:<Apps/>,
        loader:async()=>{
          const res=await axios.get('/apps.json')
          return res.data;
        }
      },
      {
        path:'app/:id',
        element:<Apps/>,
        loader:async({params})=>{
          const res=await axios.get('/apps.json')
          const app=res.data.find((appdata)=>appdata.id===params.id)
          return app;
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
