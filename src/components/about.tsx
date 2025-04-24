import {
  Container, Typography, Box,
  Button, Grid, Chip
} from "@mui/material"

import {
  FaReact as ReactIcon,
  FaNodeJs as NodeIcon,
  FaBootstrap as BootstrapIcon,
  FaDocker as DockerIcon,
} from 'react-icons/fa';

import {
  SiMongodb as MongoIcon,
  SiExpress as ExpressIcon,
  SiMaterialdesign as MuiIcon
} from 'react-icons/si';

import techStack from "../data/techstack";

export default function About(){
  return(
    <Container >
      <Typography sx={{ textAlign:"center", mt:4, mb:2, color:"primary.main",}}  variant='h5' >About Me</Typography>
      <Typography sx={{ textAlign:"left", maxWidth:"400px", mx:"auto", fontWeight:"light"}}>
        <Box component={"span"} sx={{mb:1, display:"block", fontWeight:500}} >Hi There, I am Stephen,</Box>
        A fullstack web developer based in Kampala, Uganda. I have over 2 years experience developing and deploying <span style={{fontWeight:"bold"}} >secure, scalable & highly available</span> web applications on the AWS Cloud.
      </Typography>
      <TechStack/>
      <Typography sx={{mb:3, fontWeight:"bold", textAlign:"center"}} >Need a fullstack dev on your team?</Typography>
      <Button color='secondary'  variant='contained' sx={{display:"flex", mx:"auto", py:1.8, px:3}} >Get In Touch</Button>
    </Container>
  )
}

function TechStack(){
  return(
    <Grid
      spacing={1}
      container
      sx={{mx:"auto", maxWidth:"400px", py:5, flexWrap: "wrap", justifyContent:"center"}}
    >
      {
        techStack.map((tool)=>{
          return(
            <Grid key={tool} ><Chip icon={icons[tool]} sx={{minWidth:90}} label={tool} /> </Grid>
          )
        })
      } 
    </Grid>
  )
}

const icons = {
  React: ReactIcon,
  MongoDB: MongoIcon,
  Express: ExpressIcon,
  Node: NodeIcon,
  MaterialUI: MuiIcon,
  Bootstrap: BootstrapIcon,
  Docker: DockerIcon
}