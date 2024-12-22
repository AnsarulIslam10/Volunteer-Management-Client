import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/all-volunteer-need-post',
            element: <AllVolunteerNeedPosts/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
    ]
  },
]);

export default router;
