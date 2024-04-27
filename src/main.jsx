import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from './App'
import { Home } from './Loja/Home';
import { Produtos } from './Loja/Produtos';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div><App/></div>,
    },
    {
        path: "/home",
        element: 
        <div>
            <App/>
            <Home />
        </div>,
    },
    {
        path: "/produtos",
        element: 
        <div>
            <App/>
            <Produtos />
        </div>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
     <RouterProvider router={router} />
 </React.StrictMode>
)
