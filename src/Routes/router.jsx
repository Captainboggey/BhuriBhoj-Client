import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Contact from "../Pages/Contact/Contact/Contact";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
        path: '/',
        element: <Home></Home>
    },{
        path:'/menu',
        element:<Menu></Menu>
    },{
        path:'/ourShop/:category',
        element:<OurShop></OurShop>
    },{
        path: '/contact',
        element: <Contact></Contact>
    }]
}])

export default router