import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import ItemRoot from './routes/item'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout'

const router = createBrowserRouter([
{element: <Layout />, children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/category/:id',
        element: <Root />,
      },
      {
        path: '/item/:id',
        element: <ItemRoot />,
      },
      {
        path: '/cart',
        element: <div>hola</div>,
      },
      {
        path: '/checkout',
        element: <div>hola</div>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
