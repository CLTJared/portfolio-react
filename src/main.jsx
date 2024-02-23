import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Import Pages
import App from './App.jsx'
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);