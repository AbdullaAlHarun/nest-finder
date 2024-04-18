import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../componants/Contact";
import UpdateProfile from "../componants/UpdateProfile";
import Register from "../componants/Register";
import NotFoundPage from "../pages/NotFoundPage";
import Estate from "../componants/Estate";
import Login from "../componants/Login";
import EstateDetails from "../componants/EstateDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout> </MainLayout>,
        errorElement: <NotFoundPage></NotFoundPage>,
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
                path: '/Login',
                element: <Login></Login>,
            },
            {
                path: "/Contact",
                element: <Contact></Contact>,
            },
            {
                path: "/Estate",
                element: <Estate></Estate>,
                loader: () => fetch("/nestFinder.json").then((response) => response.json()),
            },
            {
                path: "/nestFinder/:id", 
                element: <EstateDetails></EstateDetails>,
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>,
              },
        ]
    }
]);
export default router;