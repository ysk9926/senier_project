import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Login from "./components/login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/senier_project",
  }
);
export default router;
