import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Services from "../Components/Home/Services/Services";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

import Main from "../Layout/Main/Main";

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
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
]);

export default router;
