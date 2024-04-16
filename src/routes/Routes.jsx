import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Contact from "../componants/Contact";

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
                path: "/Contact",
                element: <Contact></Contact>,
              }
        ]
    }
]);
export default router;