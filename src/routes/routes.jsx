import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import HireMe from "../pages/HireMe/HireMe";
import Portfolio from "../pages/Portfolio/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/portfolio',
            element: <Portfolio></Portfolio>
        },
        {
          path: '/hireMe',
          element: <HireMe></HireMe>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;  