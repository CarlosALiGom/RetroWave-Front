import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazySynthsPage = lazy(
  () => import("../pages/SynthsPage/SynthsPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddSynthPage = lazy(
  () => import("../pages/AddSynthPage/AddSynthPage")
);
