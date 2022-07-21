import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SelectProfile from "./components/auth/SelectProfile";
import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PubliceRoute";
import MovieDetail from "./components/MovieDetail";


const RouterSetup = () => {


  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute loginOnly={true} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/select-profile" element={<SelectProfile />} />
        </Route>
        <Route element={<ProtectedRoute loginOnly={true} />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterSetup;
