import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './Navtab.css'

const Navtab = ()=>{
return(
    <AppBar position="static" className='nav'  sx={{ backgroundColor: '#fff' , boxShadow: 'none'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
            <Button>
            <img src='https://public.tableau.com/app/assets/tableau-public-logo-rgb.07774149.svg' alt='logo'/>
            </Button>
        
          <Button>Create</Button>
          <Button >Learn</Button>  
        </Typography>

        <Button sx={{color: '#black'}}>Sign In</Button>
        <Button > <SearchIcon /></Button>
      </Toolbar>
    </AppBar>
)
}
export default Navtab