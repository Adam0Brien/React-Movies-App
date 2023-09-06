import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';




const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/page=1" },
    { label: "Upcomming", path: "/movies/upcomming/page=1" },
    { label: "Top", path: "/movies/top/page=1" },
    { label: "In Cinema", path: "/movies/now-playing/page=1" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Must Watch", path: "/movies/mustwatch" },
    { label: "Tv Shows", path: "/shows" },
    { label: "Favourite Tv Shows", path: "/shows/favourites" },
    { label: "Must Watch Tv Shows", path: "/shows/mustwatch" },

    
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" style={{ background: '#292828' }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            All Movies
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          "No more half-measures!"
          </Typography>
            {isMobile ? (
              <>
                <IconButton 
                
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label} 
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              // <>
              //   {menuOptions.map((opt) => (
              //     <Button
              //       key={opt.label}
              //       color="inherit"
              //       onClick={() => handleMenuSelect(opt.path)}
              //     >
              //       {opt.label}
              //     </Button>
              //   ))}
              // </>
              <div>
              <PopupState variant="popover" popupId="movie-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Movies
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <Link to={"/page=1"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Discover</MenuItem>
                      </Link>
                      <Link to={"/movies/top/page=1"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Top Movies</MenuItem>
                      </Link>
                      <Link to={"/movies/upcomming/page=1"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Upcomming</MenuItem>
                      </Link>
                      <Link to={"/movies/now-playing/page=1"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >In Cinema</MenuItem>
                      </Link>
                      <Link to={"/movies/favourites"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Favourites</MenuItem>
                      </Link>
                      <Link to={"/movies/mustwatch"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Must Watch</MenuItem>
                      </Link>
                    </Menu>

                    </React.Fragment>
                  )}
                </PopupState>

                <PopupState variant="popover" popupId="movie-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Shows
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <Link to={"/shows/page=1"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Tv Shows</MenuItem>
                      </Link>
                      <Link to={"/shows/favourites"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Favourite Shows</MenuItem>
                      </Link>
                      <Link to={"/shows/mustwatch"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Must Watch Shows</MenuItem>
                      </Link>
                      
                    </Menu>

                    </React.Fragment>
                  )}
                </PopupState>


                <PopupState variant="popover" popupId="movie-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      My Fantasy Movie
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <Link to={"/"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Todo</MenuItem>
                      </Link>
                      <Link to={"/"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Todo</MenuItem>
                      </Link>
                      <Link to={"/"} style={{textDecoration: "none"}}>
                      <MenuItem onClick={popupState.close} >Todo</MenuItem>
                      </Link>
                      
                    </Menu>

                    </React.Fragment>
                  )}
                </PopupState>
                </div>



           
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;