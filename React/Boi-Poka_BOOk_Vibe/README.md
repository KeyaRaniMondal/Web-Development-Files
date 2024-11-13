# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





# commands for setting up tailwind css,daisyUI and react router:

# Comands from react router
- npm create vite@latest Boi-Poka_BOOk_Vibe -- --template react
- cd Boi-Poka_BOOk_Vibe
- npm install react-router-dom
- npm install localforage match-sorter sort-by

# commands from Tailwind FrameWork guides:
1. select Vite
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- in tailwind.config.js file :
-   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

- in index.css:
- @tailwind base;
  @tailwind components;
  @tailwind utilities;

# comands from DaisyUI:
- npm i -D daisyui@latest
- in tailwind.config.js:
-   plugins: [
    require('daisyui'),
  ],


# in vs code:
- go to file eslint.config.js
- after ecmaVersion: write
- node:true,


- create a file in src then :

- In main.jsx :
- import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';

- const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);

-   <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,