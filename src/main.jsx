import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../src/pages/home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErroPage from './components/ErroPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home/>, 
      },
      {
        path: "/categories/:category",
        element: <CategoryPage/>,

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
