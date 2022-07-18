import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../assets/img/logo-m.png"
import SearchIcon from "@mui/icons-material/Search";
import notif from "../../../assets/img/notif.png";
import gift from "../../../assets/img/gift.png";
import profilImg from "../../../assets/img/ProfileIMG.png";
import "./appbar.css";

const pages = ["Home", "Series", "Movie", "New and Popular", "My List"];
const iconNav = [gift, notif, profilImg];

const ResponsiveNavbar = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <Avatar alt="Remy Sharp" src={logo} />
          </Box>

          <Box
            sx={{
              flexGrow: 2,
        
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
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
              <li> Irwan </li>

              {iconNav.map((page) => (
                <li>
                  <img src={page} style={{ margin: "0px 5px" }} />
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavbar;
