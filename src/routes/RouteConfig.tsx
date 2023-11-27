// RouteConfig.tsx
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import ErrorPage from "../pages/404";
import UserPage from "../pages/UserPage";
import CreateUserPage from "../pages/CreateUser";


export const RouteConfig: React.FC = () => {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/users/:id", element: <UserPage/> },
        { path: "/create-user", element: <CreateUserPage/> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
