import React from "react";

import {
  AppBar,
  Toolbar,
  Badge,
  MenuItem,
  Menu,
  Typography,
  IconButton,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.tittle} color="inherit">
            <img
              src={logo}
              alt="E-commerce"
              height="25px"
              className={classes.image}
            />
            Dive my Shop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge
                badgeContent={totalItems}
                color="secondary"
                overlap="rectangular"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
