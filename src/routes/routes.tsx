import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routerGenerator } from "../utils/routerGenerator";
import { adminPath } from "./admin.route";
import { facultyPath } from "./faculty.route";
import { studentPath } from "./student.route";
 
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
])

export default router