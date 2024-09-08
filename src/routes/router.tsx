import App from "@/App";
import AddTree from "@/components/ManageProducts/AddTree";
import ManageCategory from "@/components/ManageProducts/ManageCategory";
import UpdateTree from "@/components/ManageProducts/UpdateTree";
import CartPage from "@/pages/CartPage/CartPage";
import CheckOut from "@/pages/CheckOut/CheckOut";
import Home from "@/pages/Home";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";
import ProductPage from "@/pages/ProductPage/ProductPage";
import ProductsByCategory from "@/pages/ProductsByCategory/ProductsByCategory";
import SingleProduct from "@/pages/ProductsDetails/SingleProduct";
import ErrorPage from "@/shared/ErrorPage/ErrorPage";
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
          fetch(
            `https://flora-fusion-backend.vercel.app/api/v1/products/${params?.id}`
          ),
      },
      {
        path: "products/single-product/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(
            `https://flora-fusion-backend.vercel.app/api/v1/products/${params?.id}`
          ),
      },
      {
        path: "products-by-category/:id",
        element: <ProductsByCategory />,
        loader: ({ params }) =>
          fetch(
            `https://flora-fusion-backend.vercel.app/api/v1/products?categoryId=${params?.id}`
          ),
      },
      {
        path: "checkout",
        element: <CheckOut />,
        children: [
          {
            index: true,
            element: <div></div>,
          },
          {
            path: "cashOn",
            element: <div></div>,
          },
          // {
          //   path: "cardPayment",
          //   element: <StripePayment />,
          // },
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
        children: [
          {
            index: true,
            element: <AddTree />,
          },
          {
            path: "add-tree",
            element: <AddTree />,
          },
          {
            path: "manage-tree",
            element: <UpdateTree />,
          },
          {
            path: "manage-category",
            element: <ManageCategory />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
