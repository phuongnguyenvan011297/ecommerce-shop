import { Badge, IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { cartItemCountSelector } from "../../features/Cart/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  const cartItemCount = useSelector(cartItemCountSelector);
  console.log(cartItemCount);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />

          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              VPShop
            </Link>
          </Typography>

          <NavLink to="/products" className={classes.link}>
            <Button color="inherit">Product</Button>
          </NavLink>
          <NavLink to="/cart" className={classes.link}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
                badgeContent={cartItemCount}
                color="secondary"
                overlap="rectangular"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
          {isLoggedIn ? (
            <IconButton color="inherit" onClick={handleClick}>
              <AccountCircleIcon />
            </IconButton>
          ) : (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}

          <Dialog
            disableEscapeKeyDown
            open={open}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              {/* <Register closeDialog={handleClose} /> */}
              {/* <Login closeDialog={handleClose} /> */}
              {mode === MODE.LOGIN ? (
                <Login closeDialog={handleClose} />
              ) : (
                <Register closeDialog={handleClose} />
              )}
            </DialogContent>
            <DialogActions>
              {mode === "login" ? (
                <Button onClick={() => setMode(MODE.REGISTER)} color="primary">
                  Register
                </Button>
              ) : (
                <Button onClick={() => setMode(MODE.LOGIN)} color="primary">
                  Login
                </Button>
              )}
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
