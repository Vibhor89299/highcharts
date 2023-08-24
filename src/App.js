import * as React from 'react';
import Banner from './Components/BannerLogo/banner';
import  Navtab from './Components/Navtab/Navtab';
import AreaChart from './Components/Charts/AreaChart';
import { Grid , Container } from '@mui/material';
import BChart from './Components/Charts/BarGraph';
import ThirdChart from './Components/Charts/ThirdChart';




  const App = ()=> {
  return (
      <div>
        <Banner />
        <Navtab />
        <Container  >
        <Grid container>
          <Grid item xs={12} sm={6} md={4} >
            <AreaChart />    
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BChart/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
          <ThirdChart />
          </Grid>
        </Grid>
        
        
        </Container>
        
        
        
      </div>      
  );
}
export default App;

 