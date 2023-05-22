import { Route, Routes } from "react-router-dom";
import "./App.css";
import Company from "./components/Company";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import DetailDestinations from "./components/DetailDestinations/DetailDestinations";
import HomePage from "./Pages/HomePage/HomePage";

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

          {/* DETAIL DESTINATIONS  */}
          <Route
            path="/detaildestinations/:id"
            element={
              <Company>
                <DetailDestinations />
              </Company>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
