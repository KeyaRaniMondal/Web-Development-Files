import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from "../layouts/Home/HomeLayout";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>
    },
    {
      path: "/news",
      element: <div>Hello News</div>,
    },
    {
      path: "/auth",
      element: <div>Login</div>,
    },
    {
      path: "*",
      element: <div>error</div>,
    },
  ]);