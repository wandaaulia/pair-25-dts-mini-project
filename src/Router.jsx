import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SelectProfile from "./components/auth/SelectProfile";
import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MovieDetail from "./components/MovieDetail";

function router() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetail />
            </ProtectedRoute>
          }
        />
        <Route path="/select-profile" element={
         <ProtectedRoute loginOnly={false}> 
                <SelectProfile />
         </ProtectedRoute>
        
        } />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default router;
