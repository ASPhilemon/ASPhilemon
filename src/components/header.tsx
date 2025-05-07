import { cloneElement } from 'react';

import {
  Container, Grid, AppBar, Toolbar,
  Button, Avatar, Typography,
  useScrollTrigger,
} from '@mui/material';

import ScrollSpy from 'react-scrollspy-navigation';
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
          </Grid>
        </Grid>
      </Container>
      <ElevationScroll >
        <AppBar position='sticky' >
          <Toolbar sx={{position: "sticky", top:0, left:0, bgcolor:"primary.main", py:2}} >
            <ScrollSpy activeClass='nav-active' >
              <a 
                href="#about"
                onClick = {(e)=>handleLinkClick(e, "about")}
                style={{marginRight:"10px", color:"black", fontSize:"17px"}}
              >About</a>
              <a
                href="#projects"
                onClick = {(e)=>handleLinkClick(e, "projects")}
                style={{marginRight:"10px", color:"black", fontSize:"17px"}}
              >Projects</a>
              <a
                href="#trainings"
                onClick = {(e)=>handleLinkClick(e, "trainings")}
                style={{marginRight:"auto", color:"black", fontSize:"17px"}}
              >Trainings</a>
            </ScrollSpy>

            <Button
              color='secondary'
              variant="contained"
              onClick={(e)=>handleLinkClick(e, "contact")}
            >Get In Touch</Button>
          </Toolbar>
      </AppBar>
      </ElevationScroll>
    </>
  );
}

function handleLinkClick(e, toId){
  e.preventDefault();
  const toElement = document.querySelector(`#${toId}`)
  const offset =-80
  if (toElement) {
    const y = toElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y-300, behavior: 'instant', });
    window.scrollTo({ top: y+offset, behavior: 'smooth', });
  }
};

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