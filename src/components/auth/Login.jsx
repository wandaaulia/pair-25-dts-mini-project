import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const imgPhoto = useSelector((state) => state.apis.imgProfile);

  const imgPhotoLocal = localStorage.getItem("profilePhoto");

  const isImgPhoto = imgPhoto ? imgPhoto : imgPhotoLocal;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(email);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.3337710084033614) 39%, rgba(0,0,0,1) 76%, rgba(0,0,0,1) 100%) ,url( " + isImgPhoto + " )",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ backgroundColor: "black" }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <input type="email" id="email" name="email" placeholder="EMAIL" />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD"
            />

            <Typography sx={{ color: "#E50913", paddingTop: "10px" }}>
              {errorMessage}
            </Typography>
            <div className="container-btn">
              <button type="submit" className="hover-login">
                {" "}
                LOGIN{" "}
              </button>
            </div>

            <Typography
              sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              or
            </Typography>

            <div className="container-btn">
              <button onClick={signInWithGoogle} className="btn-sigin">
                {" "}
                Sigin with Google{" "}
              </button>
            </div>
            <Grid container>
              <Grid item sx={{ mt: 5 }}>
                <Link to="/register" variant="body2">
                  <p className="text-to-register">
                    {" "}
                    {"Don't have an account? Sign Up"}{" "}
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;
