import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../layouts/Mainlayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/Products";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },

      {
        path: "products/:id",
        element: <Products />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default Mainroutes;