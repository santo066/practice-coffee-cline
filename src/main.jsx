import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Component/Addcoffee.jsx';
import Update from './Component/Update.jsx';
import Signin from './Component/Singin.jsx';
import Signout from './Component/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Component/Users.jsx';
import Login from './Component/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/coffees')
  },
  {
    path: '/addcoffee',
    element: <Addcoffee></Addcoffee>
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({ params }) => fetch(`https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/coffees/${params.id}`)

  },
  {
    path: '/signin',
    element: <Signin></Signin>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/users')
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
