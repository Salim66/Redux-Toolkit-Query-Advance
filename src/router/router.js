import { createBrowserRouter } from "react-router-dom";
import User from "../featured/user/User";


// create router
export const router = createBrowserRouter([
    {
        path: "/user",
        element: <User />
    }
]);