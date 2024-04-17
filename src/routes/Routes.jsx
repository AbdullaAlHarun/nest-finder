import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../componants/Contact";
import UpdateProfile from "../componants/UpdateProfile";
import Register from "../componants/Register";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout> </MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: "/Contact",
                element: <Contact></Contact>,
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>,
              },
        ]
    }
]);
export default router;