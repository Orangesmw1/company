import { Route, Routes } from "react-router-dom";
import "./App.css";
import Company from "./components/Company";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

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

          <Route
            path="/login"
            element={
              <Company>
                <Login />
              </Company>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
