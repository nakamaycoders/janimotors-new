import { AppBar, Toolbar, makeStyles, withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";
import Box from '@mui/material/Box'

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
    zIndex:-1,
  },
  btn: {
    color: "#2874f0",
    background: "#FFFFFF",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
  },
  logoText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bolder",
    fontFamily: "sans-serif",
    marginLeft: "10%",
    // marginBottom: 8,
    lineHeight: 2,
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  box: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      fontSize: 12,
      textDecoration: "none",
      alignItems: "center",
    },
  },
});

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = (props) => {
  const classes = useStyle();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
        <Box className={classes.box}>
          <span className={classes.btn} style={{cursor:'pointer'}} onClick={logout}>
            Signout
          </span>
      </Box>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Box className={classes.box}>
        <NavLink to="/signin" underline="none" className={classes.btn}>
          {"Signin"}
        </NavLink>
        <NavLink to="/signup" underline="none" className={classes.btn}>
          {"Signup"}
        </NavLink>
      </Box>
    );
  };

  return (
    <>
    <AppBar className={classes.header}>
      <ToolBar>
        <NavLink to="/" underline="none" className={classes.logoText}>
          Admin Dashboard
        </NavLink>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </ToolBar>
    </AppBar>
    </>
  );
};

export default Header;
