import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import AllToys from './Pages/AllToys/AllToys';
import ToyDetail from './Pages/ToyDetail/ToyDetail';
import PrivateRoute from './Routes/PrivateRoute';
import AuthProvider from './Provider/AuthProvider';
import AddaToy from './Pages/AddaToy/AddaToy';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MyToys from './Pages/MyToys/MyToys';
import UpdateToy from './Pages/UpdateToy/UpdateToy';


const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/toydetail/:id',
        element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-land-server-beta.vercel.app/alltoys/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add-a-toy',
        element: <PrivateRoute><AddaToy></AddaToy></PrivateRoute>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-land-server-beta.vercel.app/myToys/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
