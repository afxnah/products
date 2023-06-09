import {  AppBar, Box, IconButton, Toolbar, Typography, Button } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            shopping cart
          </Typography>
          <Button  color="inherit"><Link to='/' style={{color:'white',textDecoration:'none'}}>view</Link></Button>
          <Button color="inherit"><Link to='/Add'style={{color:'white',textDecoration:'none'}} >Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
