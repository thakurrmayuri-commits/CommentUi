import "./App.css"
import { ROUTES } from "./components/utils/routeConfig.tsx";
import Header from "./components/header"
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react"



function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/" />;
}



function App() {
  return (
    <div>
      <Header />
      <Routes>
        {ROUTES.map(({ path, component: Component, protected: isProtected }, index) => {
          if (!Component) {
            return (
              <Route
                key={index}
                path={path}
                element={<Navigate to="/" />}
              />
            );
          }
          const LazyComponent = React.lazy(Component);
          const lazyElement = (
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </React.Suspense>
          );

          const routeElement = isProtected ? (
            <ProtectedRoute>{lazyElement}</ProtectedRoute>
          ) : (
            lazyElement
          );

          return <Route key={index} path={path} element={routeElement} />;
        }
        )}
      </Routes>
    </div>
  );
}

export default App;
