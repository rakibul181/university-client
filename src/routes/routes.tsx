import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routerGenerator } from "../utils/routerGenerator";
import { adminPath } from "./admin.route";
import { facultyPath } from "./faculty.route";
import { studentPath } from "./student.route";
import Login from "../pages/Login";
 
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
        children:routerGenerator(facultyPath)
    },
    {
        path:'/student',
        element:<App/>,
        children:routerGenerator(studentPath)
    },
    {
        path:'/login',
        element: <Login></Login>,
     },
])

export default router