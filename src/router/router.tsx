import { createBrowserRouter } from "react-router";
import App from "../App";
import Playground from "../pages/Playground/Playground";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
]);
