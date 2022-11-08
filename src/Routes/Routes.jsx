import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
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
    ],
  },
]);

export default router;
