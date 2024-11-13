import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/Home/HomePage';
import Dashboard from './components/dashbord/Dashbord';
import BookDetail from './components/bookDetail/BookDetail';
import ListedBooks from './components/listedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    Errorelement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'listedBooks',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
