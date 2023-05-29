import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Routes/Home";
import Login from "./components/login";
import Test from "./Test";

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
    {
      path: "/test",
      element: <Test />,
    },
  ],
  {
    basename: "/senier_project",
  }
);
export default router;
