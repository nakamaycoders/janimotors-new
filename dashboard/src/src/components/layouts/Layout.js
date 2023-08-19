import React from 'react';
import { makeStyles } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Header from "./Header";

const useStyle = makeStyles({
  box1: {
    marginTop: 55,
    // display: "flex",
    // justifyContent: "center",
    // textAlign: "center",
    border: '2px solid'
  },
  lists:{
    padding: '26px 0px',
    
  },
  grid1:{
    position: 'fixed',
    width: '16.17em',
    height: '-webkit-fill-available'
  },
  links:{
    textDecoration: 'none',
    color: 'white',
    "&:hover,&:focus": {
      color: '#ffffff',
      backgroundColor: '#87c1e3',
      // padding: '9px 33px',
      borderRadius: '7px',
      padding: '14px 69px',
  }
}
});
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    paddingLeft: '0px',
    backgroundColor: '#323232'
  }));

const Layout = (props) => {
  const classes = useStyle();

  return(
    <>
       <Header />
       {
         props.sidebar ?
         <Box  className={classes.box1} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} style={{paddingLeft:0}}>
          <Item className={classes.grid1} >
            <ul style={{listStyle:'none',paddingLeft:17}}>
                <li className={classes.lists}><NavLink className={classes.links} to='/'>Home</NavLink></li>
                <li className={classes.lists}><NavLink className={classes.links} to='/page'>Page</NavLink></li>
                <li className={classes.lists}><NavLink className={classes.links} to='/category'>Category</NavLink></li>
                <li className={classes.lists}><NavLink className={classes.links} to='/products'>Products</NavLink></li>
                <li className={classes.lists}><NavLink className={classes.links} to='/orders'>Orders</NavLink></li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs={10}>
          {/* <Item> */}
            {props.children}
          {/* </Item> */}
        </Grid>
      </Grid>
    </Box>
        :
        props.children
       }
        
        
    </>
   )

 }

export default Layout;