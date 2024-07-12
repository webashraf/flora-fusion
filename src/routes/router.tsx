import App from "@/App";
import Home from "@/pages/Home";
import SingleProduct from "@/pages/ProductsDetails/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single-product/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/products/${params?.id}`),
      },
    ],
  },
]);

export default router;
