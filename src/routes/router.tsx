import App from "@/App";
import Hero from "@/components/Home/Hero/Hero";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
    ],
  },
]);

export default router;
