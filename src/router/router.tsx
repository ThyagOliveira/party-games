import { createBrowserRouter } from "react-router";
import Playground from "@/pages/Playground/Playground";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Playground />,
  },
]);
