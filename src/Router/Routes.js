import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'
import Checkout from '../pages/Checkout/Checkout'
import Home from '../pages/Home/Home'

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
            }
        ]
    }
])