import { Route, Routes } from "react-router-dom";
import "./App.css";
import Company from "./component/Company";
import HomePage from "./component/HomePage/HomePage";
import Register from "./component/Register/Register";

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
          <Route
            path="/register"
            element={
              <Company>
                <Register />
              </Company>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
