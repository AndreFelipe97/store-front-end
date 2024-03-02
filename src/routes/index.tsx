import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../pages/products";
import Dashboard from "../pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/produtos",
    element: <Products />,
  },
  {
    path:"/Dashboard",
    element: <Dashboard />
  }
]);
