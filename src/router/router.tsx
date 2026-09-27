import { createBrowserRouter } from "react-router";
import Playground from "@/pages/Playground/Playground";
import RootLayout from "@/layouts/RootLayout";
import Example from "@/pages/Example/Example";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Playground />,
      },
      {
        path: "/example",
        element: <Example />,
      },
    ],
  },
]);
