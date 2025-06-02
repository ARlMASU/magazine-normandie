import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import App from "./App.jsx";

import Timeline from "./pages/Timeline/Timeline";
import Archives from "./pages/Archives/Archives";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="/chronologie" replace />,
      },
      {
        path: "/chronologie",
        element: <Timeline />,
      },
      {
        path: "/archives",
        element: <Archives />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
