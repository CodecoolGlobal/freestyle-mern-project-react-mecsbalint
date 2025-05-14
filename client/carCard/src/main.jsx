import App from "./pages/App/App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Drawing from "./pages/Drawing/Drawing.jsx";
import CollectData from "./pages/CollectData/CollectData.jsx";
import Encounter from "./pages/Encounter/Encounter.jsx";
import Result from "./pages/Result/Result.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Drawing />,
      },
      {
        path: "/collect-data",
        element: <CollectData />
      },
      {
        path: "/encounter",
        element: <Encounter />
      },
      {
        path: "/result",
        element: <Result />
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/registration",
    element: <RegistrationPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
