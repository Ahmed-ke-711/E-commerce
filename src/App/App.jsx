import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../Pages/auth/LoginPage";
import RegisterPage from "../Pages/auth/RegisterPage";
import Layout from "../components/Layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/RegisterPage", element: <RegisterPage /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={Router} />
  )
}
