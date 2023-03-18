import Main from "../pages/MainPage";
import About from "../pages/AboutPage";
import FormPage from "../pages/FormPage";
import NotFound from "../pages/Page404";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  FORMPAGE = "form",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.FORMPAGE]: "/form",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <Main />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
  {
    path: RoutePath.form,
    element: <FormPage />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
];
