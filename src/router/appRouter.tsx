import { RouteObject, createBrowserRouter } from "react-router-dom";
import { LazyLoginPage } from "./LazyPages";
import App from "../components/App/App";
import { Suspense } from "react";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
