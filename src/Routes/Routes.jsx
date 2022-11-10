import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import Edit from "../Components/Edit/Edit";
import Home from "../Components/Home/Home/Home";
import ServiceDetails from "../Components/Home/Services/ServiceDetails";
import Services from "../Components/Home/Services/Services";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import SignUp from "../Components/SignUp/SignUp";

import Main from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://awesomely-eating-server.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
