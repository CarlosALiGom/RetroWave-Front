import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import {
  LazyAddSynthPage,
  LazyDetailsPage,
  LazyLoginPage,
  LazyNotFoundPage,
} from "./LazyPages";
import App from "../components/App/App";
import { Suspense } from "react";
import SynthsPage from "../pages/SynthsPage/SynthsPage";
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
            <SynthsPage />
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
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
