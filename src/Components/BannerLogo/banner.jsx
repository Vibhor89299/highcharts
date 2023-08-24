import React from "react";
import { Box , Typography } from '@mui/material';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import './banner.css';


function Banner(){

return(
    <Box style={{ borderBottom: '1.5px solid #0036e6', backgroundColor: '#e6ebff'  }}>
        <Typography>
            <a className='logo' href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                <WbCloudyIcon/> Salesforce
            </a>
        </Typography>      
      </Box>

)
}
export default Banner;

