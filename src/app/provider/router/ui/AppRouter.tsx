import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

function AppRouter() {
  return (
    <div className="wrapper">
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<div><PageLoader /></div>}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
