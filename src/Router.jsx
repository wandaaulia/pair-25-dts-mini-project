/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SelectProfile from "./components/auth/SelectProfile";
import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PubliceRoute";
import MovieDetail from "./components/MovieDetail";
import { SplashScreen } from "./components/SplashScreen";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/config/firebase'
import SearchMovie from "./components/SearchMovie";

const RouterSetup = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <SplashScreen />
    )
  } else {
    return (
      <Router>
        <Routes>
          <Route element={<PublicRoute loginOnly={true} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/select-profile" element={<SelectProfile />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute loginOnly={true} />}>
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchMovie />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default RouterSetup;
