import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SelectProfile from "./components/auth/SelectProfile";
import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dummy from "./components/Dummy";
import Login2 from "./components/auth/Login2";
import Register2 from "./components/auth/Register2";

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
        <Route path="/select-profile" element={
         <ProtectedRoute loginOnly={false}> 
                <SelectProfile />
         </ProtectedRoute>
        
        } />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register2 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default router;
