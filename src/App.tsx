import { Route, Routes } from "react-router-dom"
import "./App.css"
import { ROUTES } from "./components/utils/routeConfig.tsx";
import Header from "./components/header"
import { Suspense } from "react";
import { lazy } from "react";



function renderRouter(route: any) {
  const Component = lazy(route.component);
  const element = (
    <Suspense fallback="Component is Laoding....">
      <Component />
    </Suspense>
  );
  return element;
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {ROUTES.map((route) => {
          if (route.children) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={renderRouter(route)}
              >
                {route.children.map((childRoute) => {
                  if (childRoute.index) {
                    return (
                      <Route
                        key="index"
                        index
                        element={renderRouter(childRoute)}
                      />
                    );
                  }
                  return (
                    <Route
                      key={childRoute.path}
                      path={childRoute.path}
                      element={renderRouter(childRoute)}
                    />
                  );
                })}
              </Route>
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={renderRouter(route)}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
