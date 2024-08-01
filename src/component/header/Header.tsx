import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Link to={'/Users'} style={{ textDecoration: 'none' }}>
          <Typography variant={'h5'}>
            Users
          </Typography>
        </Link>
        <Link to={'/Todos'} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              marginLeft: 5,
            }}
            variant={'h5'}
          >
            Todos
          </Typography>
        </Link>
        <Link to={'/Posts'} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              marginLeft: 5,
            }}
            variant={'h5'}
          >
            Posts
          </Typography>
        </Link>
        <Link to={'/Itsfive'} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              marginLeft: 5,
            }}
            variant={'h5'}
          >
            Itsfive
          </Typography>
        </Link>
        <Link to={'/Quiz'} style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              marginLeft: 5,
            }}
            variant={'h5'}
          >
            quiz
          </Typography>
        </Link>
        <IconButton>
          <ShoppingBasket/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;