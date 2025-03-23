import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate replace to="/" />,
      },
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
