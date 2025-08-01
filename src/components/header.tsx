import { cloneElement } from 'react';

import {
  Container, Grid, Toolbar,
  Button, Typography,
  useScrollTrigger,
  Link,
  styled,
  Avatar,
  AppBar,
} from '@mui/material';
import dp from "../assets/img/dp.jpg"

import ScrollSpy from 'react-scrollspy-navigation';
import { scrollTo } from '../util/scrollTo';

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: 16,
  color: "white",
  ":hover": {
    color: "#ffd54f"
  }
}));

export default function Header() {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          pt:2,
          pb:3,
          px:{md:5},
          backgroundColor: "primary.main"
        }}
      >
        <Grid container sx={{alignItems:"center", flexWrap:"nowrap",}} >
          <Grid size={6} sx={{mr:"auto"}} >
            <Typography
              sx = {{
                textShadow:'2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight:"bold",
                letterSpacing:{xs:1.2, md:3},
                color:"primary.contrastText"
              }}
              variant="h6"
            >
              ARIKO STEPHEN PHILEMON
            </Typography>
          </Grid>
          <Avatar
            src={dp}
            alt="Profile Photo"
            sx={{
              width: 80, height: 80,
              borderRadius: 2, cursor:"pointer",
              transition: "transform .4s, boxshadow .4s, border-radius .4s",
              transformOrigin: "top right",
              zIndex: 2000,
              ":hover": {
                transform: "scale(2.5)",
                boxShadow: 6,
                borderRadius: 0
              },
              display: {md: "none"}
            }}
          />
        </Grid>
      </Container>
      <ElevationScroll >
        <AppBar sx={{position:"sticky", top:0, backgroundColor: "primary.main", zIndex: 1,}}>
          <Toolbar
            sx={{
              py:2,
              px:{md:5}
            }}
            >
            <ScrollSpy activeClass='nav-active' >
              <NavLink 
                href="#about"
                underline='none'
                onClick = {(e)=>scrollTo(e, "about")}
                style={{
                  marginRight:8,
                }}
              >About</NavLink>
              <NavLink
                href="#projects"
                onClick = {(e)=>scrollTo(e, "projects")}
                style={{marginRight:8,}}
                underline='none'
              >Projects</NavLink>
              <NavLink
                href="#trainings"
                onClick = {(e)=>scrollTo(e, "trainings")}
                style={{marginRight:"auto",}}
                underline='none'
              >Trainings</NavLink>
            </ScrollSpy>

            <Button
              variant="outlined"
              sx={{bgcolor: "white", color: "secondary.dark", boxShadow: 1}}
              onClick={(e)=>scrollTo(e, "contact")}
            >
              Get In Touch
            </Button>
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