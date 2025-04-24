import { cloneElement } from 'react';

import {
  Container, Grid, AppBar, Toolbar,
  Button, Link, Avatar, Typography,
  useScrollTrigger
} from '@mui/material';

import dp from "./../assets/img/dp.jpg"

export default function Header() {
  return (
    <>
      <Container maxWidth={false} sx={{px:3, pt:2, bgcolor:"primary.main", pb:3}} >
        <Grid container sx={{alignItems:"center", flexWrap:"nowrap",}} >
          <Grid size={6} sx={{mr:"auto"}} >
            <Typography sx={{textShadow:'2px 2px 4px rgba(0,0,0,0.3)', fontWeight:"bold", letterSpacing:{xs:1.2, md:3}}} variant="h6" >ARIKO STEPHEN PHILEMON</Typography>
          </Grid>
          <Grid sx = {{display:"flex", alignItems:"baseline"}} >
            <Avatar  sx={{mr:2, width:120, height:120, borderRadius: 2, boxShadow:4}} alt="Cindy Baker" src={dp} />
            {/* <Box sx={{display:{xs:"none", md:"flex"} }} >
            <Link style={{color:"black",}}  href="/">
                <XIcon  fontSize='small' sx={{mr:{md:1}, mb:{xs:0.1, md:0}, width:"15px"}}  />
            </Link>

            <Link style={{color:"black"}}  href="/">
                <GitHubIcon   fontSize='small' sx={{mr:{md:1}, mb:{xs:0.1, md:0}, width:"15px",}}  />
            </Link>
              <Link style={{color:"black", width:"15px", }}  href="/">
                <LinkedInIcon  fontSize='small' />
            </Link>
            </Box> */}
          </Grid>
        </Grid>
      </Container>
      <ElevationScroll >
        <AppBar position='sticky' >
          <Toolbar sx={{position: "sticky", top:0, left:0, bgcolor:"primary.main", py:2}} >
            <Link sx={{color: "white", mr:{xs:1, md:2}, fontWeight:"bold"}}  href ="#about" >About</Link>
            <Link sx={{color: "white", mr:{xs:1, md:2}}} href="#projects" >Projects</Link>
            <Link sx={{color: "white", mr:"auto" }} href="#trainings" >Trainings</Link>
            <Button   color='secondary' variant="contained" >Get In Touch</Button>
          </Toolbar>
      </AppBar>
      </ElevationScroll>
    </>
  );
}

function ElevationScroll({children}) {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 160,
  });

  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}
