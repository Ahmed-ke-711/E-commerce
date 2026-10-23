// import { createBrowserRouter} from "react-router-dom";
// import RegisterPage from "../Pages/auth/RegisterPage";
// import LoginPage from "../Pages/auth/LoginPage";
// import Layout from "../components/Layout/Layout";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Router from "./router";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <LoginPage /> },
//       { path: "/RegisterPage", element: <RegisterPage /> },
//     ],
//   },
// ]);

export default function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster/>
    </>
  )
}
