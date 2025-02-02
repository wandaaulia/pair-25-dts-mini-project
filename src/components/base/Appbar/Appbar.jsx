import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../assets/img/logo-m.png";
import SearchIcon from "@mui/icons-material/Search";
import notif from "../../../assets/img/notif.png";
import gift from "../../../assets/img/gift.png";
import profilImg from "../../../assets/img/ProfileIMG.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { auth } from "../../../config/firebase";
import { useNavigate, useLocation, matchRoutes } from 'react-router-dom';

import "./appbar.css";

const pages = ["Home", "Series", "Movie", "New and Popular", "My List"];
const iconNav = [gift, notif];

const ResponsiveNavbar = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate();

  let linkHome;

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/select-profile");
    } catch (err) {
      console.log(err);
    }
  };

  const toPage = item => {
    if (item === 'Home') {
      navigate("/")
    }
  }
  if (!user && !loading && location.pathname !== '/select-profile') {
    linkHome = <button className="login_sign_app" onClick={() => navigate("/login")}>Login</button>
    // linkHome = <Link to="/login" variant="body2" className="login-btn">login</Link>
  } else {
    linkHome = <div> </div>
  }


  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <Avatar alt="Remy Sharp" src={logo} onClick={() => toPage('Home')} />
        </Box>

        {user ? (
          <>
            <Box
              sx={{
                flexGrow: 2,

                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i}>
                  <Typography textAlign="center" onClick={() => toPage(page)}>{page}</Typography>
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { md: "none" } }}>
              <SearchIcon
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <ul className="appbar-icon">
                <li>
                  <SearchIcon
                    sx={{
                      display: { xs: "block", md: "flex" },
                    }}
                  />
                </li>
                <li> {user.displayName ? user.displayName : user.email} </li>

                {iconNav.map((item, i) => (
                  <li key={i + 5}>
                    <img src={item} alt='img' style={{ margin: "0px 5px" }} />
                  </li>
                ))}

                <li>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <img src={profilImg} alt='img' style={{ margin: "0px 5px" }} />
                  </IconButton> </li>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu} >

                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center"> logout </Typography>
                  </MenuItem>
                </Menu>
              </ul>
            </Box>
          </>
        ) :
          linkHome
        }
      </Toolbar>
    </Container>
  );
};
export default ResponsiveNavbar;
