import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";
import PageLoader from "../components/pageLoader/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
        />
      ))}
    </Routes>
  );
};
