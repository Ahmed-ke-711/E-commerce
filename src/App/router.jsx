import { createBrowserRouter} from "react-router-dom";
import RegisterPage from "../Pages/auth/RegisterPage";
import LoginPage from "../Pages/auth/LoginPage";
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

export default Router