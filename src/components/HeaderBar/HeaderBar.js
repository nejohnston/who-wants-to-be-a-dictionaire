import React from 'react';

import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase';

const useStyles = makeStyles({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#fff'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90vw',
    alignItems: 'center',
    padding: '0'
  },
  iconTitleContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "rgba(0, 0, 0, 0.87)"
  }
});

const HeaderBar = () => {
  const classes = useStyles();

  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const logOut = async (event) => {
    event.preventDefault();
    const response = firebase.logout();
    console.log(response);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <AppBar
        position='fixed'
        color='default'
        className={classes.headerContainer}
      >
        <Toolbar className={classes.header}>
            
              <div className={classes.iconTitleContainer}>
                <NavLink
                  to='/'
                  offset={-70}
                  duration={750}
                >
                  <IconButton
                  >
                    <HomeIcon/>
                  </IconButton>
                </NavLink>
              </div>
              <Button variant="contained" color="secondary" onClick={logOut}>
                Signout
              </Button>
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
            { (firebase.auth().currentUser) ? 
            
          <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
 <MenuItem>
  <NavLink
    to='about'
    offset={-70}
    duration={750}
    onClick={handleClose}
    className={classes.linkText}
  >
    Profile
  </NavLink>
</MenuItem>
              
             <MenuItem>
              <NavLink
                to='about'
                offset={-70}
                duration={750}
                onClick={handleClose}
                className={classes.linkText}
              >
                About
              </NavLink>
            </MenuItem>
            </Menu>
 : 
 <Menu
 id='simple-menu'
 anchorEl={anchorEl}
 keepMounted
 open={Boolean(anchorEl)}
 onClose={handleClose}
>
 <MenuItem>
  <NavLink
    to='sign-in'
    offset={-70}
    duration={750}
    onClick={handleClose}
    className={classes.linkText}
  >
    Sign In
  </NavLink>
</MenuItem>
<MenuItem>
              <NavLink
                to='sign-up'
                offset={-70}
                duration={750}
                onClick={handleClose}
                className={classes.linkText}
              >
                Sign Up
              </NavLink>
              {/* <MenuItem>
              <NavLink
                to='about'
                offset={-70}
                duration={750}
                onClick={handleClose}
                className={classes.linkText}
              >
                About
              </NavLink>
            </MenuItem> */}
            </MenuItem>
            </Menu>
 }
            
            
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;