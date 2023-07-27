import { Routes, Route } from "react-router-dom";
import { WithProviders } from './providers';
import { routes } from "../pages";

export const App = function App() {
  return (
    <WithProviders>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path} 
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </WithProviders>
  );
};
