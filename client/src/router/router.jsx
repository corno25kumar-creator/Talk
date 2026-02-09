import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup"; // 
import Home from "../pages/Home";
import Error from "../pages/Error";
import AuthLayout from "../layouts/Authlayout";
import AppLayout from "../layouts/AppLayout";
import MessageContainer from "../components/MessageContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    element: <AuthLayout />, 
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <AppLayout />, 
    children: [
      { path: "/dashboard", element: <MessageContainer /> },
    ],
  },
]);

export default router;
