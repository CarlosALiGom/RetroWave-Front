import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import {
  LazyAddSynthPage,
  LazyDetailsPage,
  LazyLoginPage,
  LazyNotFoundPage,
  LazySynthsPage,
  LazyUpdateSynthPage,
} from "./LazyPages";
import App from "../components/App/App";
import { Suspense } from "react";
import paths from "./paths/paths";

const routes: RouteObject[] = [
  {
    path: paths.app,
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazySynthsPage />
          </Suspense>
        ),
      },
      {
        path: paths.addSynth,
        element: (
          <Suspense>
            <LazyAddSynthPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.synths}/:synthId`,
        element: (
          <Suspense>
            <LazyDetailsPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.updateSynth}`,
        element: (
          <Suspense>
            <LazyUpdateSynthPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
