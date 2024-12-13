import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Sidenav, DashboardNavbar, Configurator } from "../widgets/layout";
import routes from "../routes";
import { useMaterialTailwindController } from "../context";
import ErrorBoundary from "../ErrorBoundary"; // Import your ErrorBoundary component

export function Dashboard() {
  const location = useLocation();

  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-72">
        <DashboardNavbar />
        <Configurator />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(
                ({ layout, pages }) =>
                  layout === "dashboard" &&
                  pages.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                  ))
              )}
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <div className="text-blue-gray-600">
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
