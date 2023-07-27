import {
  Routes,
  Route,
} from "react-router-dom";
import { WithProviders } from './providers';

export const App = function App() {
  return (
    <WithProviders>
      <Routes>
        <Route path="/" element={123}/>
        <Route path="/user/:id" element={1234} />
      </Routes>
    </WithProviders>
  );
};
