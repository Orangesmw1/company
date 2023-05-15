import { Route, Routes } from "react-router-dom";
import "./App.css";
import Company from "./component/Company";
import HomePage from "./component/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <Company>
                <HomePage />
              </Company>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
