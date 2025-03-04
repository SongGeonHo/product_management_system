
import { createBrowserRouter, RouterProvider, Navigate, useRouteLoaderData, redirect } from "react-router-dom";
import Home from "./pages/Home";
import Signup, { action as signUpAction } from "./pages/Signup";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',        // 회원가입
        element: <Signup />,
        action: signUpAction
      },

    ]
  }
]);

function Main() {
  return <RouterProvider router={router} />
}

export default Main;
