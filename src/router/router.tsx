import { createBrowserRouter } from "react-router";
import Playground from "@/pages/Playground/Playground";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Playground />,
      },
    ],
  },
]);
