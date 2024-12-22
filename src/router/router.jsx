import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import VolunteerNeedPostDetails from "../pages/VolunteerNeedPostDetails/VolunteerNeedPostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/all-volunteer-need-posts',
            element: <AllVolunteerNeedPosts/>
        },
        {
            path: '/add-volunteer-need-post',
            element: <PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>
        },
        {
            path: '/volunteer-need-post-details/:id',
            element: <PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>,
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
