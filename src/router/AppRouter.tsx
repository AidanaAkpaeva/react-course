import routeConfig from "./routeConfig";

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
