import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Singup.jsx'
import Home from '../pages/Home.jsx';
import Error from '../pages/Error.jsx';
import Authlayout from '../layouts/Authlayout.jsx';
import AppLayout from '../layouts/AppLayout.jsx';


const router = createBrowserRouter ([
    {
        element:<Authlayout/>,
        errorElement:<Error/>,
        children:[
            {path:"/login", element:<Login/>},
            {path:"/singup", element:<Signup/>}
        ],
    },
    {
         path: "/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {path:"/home", element:<Home/>}
        ]
    }
])

export default router