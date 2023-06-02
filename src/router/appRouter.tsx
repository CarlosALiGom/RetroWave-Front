import { RouteObject, createBrowserRouter } from "react-router-dom";
import { LazyLoginPage } from "./LazyPages";
import App from "../components/App/App";
import { Suspense } from "react";
import SynthsPage from "../pages/SynthsPage/SynthsPage";

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
      {
        path: "/home",
        element: (
          <Suspense>
            <SynthsPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
