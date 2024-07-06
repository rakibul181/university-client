import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routerGenerator } from "../utils/routerGenerator";
import { adminPath } from "./admin.route";
 
const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>

    },
    {
        path:'/admin',
        element:<App/>,
        children:routerGenerator(adminPath)
    },
    {
        path:'/faculty',
        element:<App/>,
        children:routerGenerator(adminPath)
    },
    {
        path:'/student',
        element:<App/>,
        children:routerGenerator(adminPath)
    },
])

export default router