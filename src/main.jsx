import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import User from "./components/User.jsx";
import "./index.css";
import Main from "./layout/Main.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import SignInPage from "./components/SignInPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/users",
        element: <User />,
        loader: () => fetch("http://localhost:5000/user"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
