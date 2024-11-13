import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import COntact from './components/Contact/COntact.jsx'
import User from './components/User/User.jsx'
import Details from './components/Details/Details.jsx'


const router = createBrowserRouter([
  {
    path:   
 "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element:<COntact></COntact>,
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/user/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Details></Details>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
