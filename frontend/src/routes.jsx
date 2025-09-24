import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GetAllBlogs from "./pages/GetAllBlogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <GetAllBlogs />
            }
        ]
    }
]);

export default router;