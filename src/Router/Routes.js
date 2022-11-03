import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Checkout from '../pages/Checkout/Checkout'
import Error404 from '../pages/Error404/Error404'
import Home from '../pages/Home/Home'
import Orders from '../pages/Orders/Orders'
import PrivateRoute from './PrivateRoute'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    }
])