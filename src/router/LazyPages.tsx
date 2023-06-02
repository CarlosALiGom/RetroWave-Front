import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazySynthsPage = lazy(
  () => import("../pages/SynthsPage/SynthsPageStyled")
);
