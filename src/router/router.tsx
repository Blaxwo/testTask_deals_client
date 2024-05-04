import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import Home from "../pages/Home/Home.tsx";
import Auth from "../pages/LogIn/Auth.tsx";
import Login from "../pages/LogIn/Login.tsx";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'auth',
                element: <Auth/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])