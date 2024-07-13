import App from "@/App";
import CartPage from "@/pages/CartPage/CartPage";
import CheckOut from "@/pages/CheckOut/CheckOut";
import Home from "@/pages/Home";
import ProductPage from "@/pages/ProductPage/ProductPage";
import SingleProduct from "@/pages/ProductsDetails/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "single-product/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/products/${params?.id}`),
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
