import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import React from "react";
import Menu from "./Menu";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});
//next static
const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <Typography component="h1" variant="h6" className={classes.title}>
            Meu ProFile
          </Typography>
          
 
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;

//          <StoreIcon />

//          <img src="./icons/iconegomes.jpg" />

//          <Typography>icone</Typography>
