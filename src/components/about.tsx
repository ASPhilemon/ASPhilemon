import {
  Container, Typography, Box,
  Button, Grid, Chip,
  styled,
} from "@mui/material"

import {
  FaReact as ReactIcon,
  FaNodeJs as NodeIcon,
  FaBootstrap as BootstrapIcon,
  FaDocker as DockerIcon,
} from 'react-icons/fa';

import {
  SiMongodb as MongoIcon,
  SiMysql as MySQLIcon,
  SiExpress as ExpressIcon,
  SiMaterialdesign as MuiIcon,
  SiPython as PythonIcon,
  SiTypescript as TypescriptIcon,
  SiAmazonwebservices as AWSIcon,
} from 'react-icons/si';

import techStack from "../data/techstack";
import aboutDp from "../assets/img/about-dp.jpg"


export default function About(){

  return(
  <Container maxWidth ={false} id="about" sx={{
     py:8, display: "flex", justifyContent:"center",
     alignItems:"start", px: {lg: 20},
    }}
  >

    <Box sx={{ maxWidth: 500, marginLeft:0 }}>
      <Box sx={{mx:"auto", mb:1}} >
        <Typography
          sx={{mb:2, fontWeight:"bold", color:"primary.dark"}}
          variant="h5"
        >Hi There,
        </Typography>
        <Typography>
          I am <Box component={"span"} sx={{fontWeight:"bold"}} >Philemon,</Box>  a fullstack developer based in Kampala, Uganda.
          I have over 2 years experience developing and deploying
          <Box component={"span"} sx={{fontWeight:"bold"}} > secure, scalable & highly available</Box> applications on the AWS Cloud.
        </Typography>
      </Box>
      <Box sx={{maxWidth:400, mx:"auto"}} >
        <TechStack/>
      </Box>
      <Typography sx={{textAlign:"center", mb:3}} >Need a fullstack dev on your team?</Typography>
      <Box sx={{ maxWidth:500, mx:"auto", textAlign:"center"}} >
        <Button
          variant='contained'
          size="large"
          color="secondary"
          href="#contact"
          sx={{display:"inline-flex", mx:"auto",}}
          onClick={(e)=>handleLinkClick(e, "contact")}
        >Get In Touch</Button>
      </Box>
    </Box>
    <Box
      component={"img"}
      src={aboutDp}
      width={300}
      sx={{ borderRadius: 1, marginLeft: "auto", boxShadow: 1, display:{xs: "none", md:"block"}}}
    />
  </Container>
  )
}

function TechStack(){
  return(
    <Grid
      spacing={1}
      container
      sx={{py:3, flexWrap: "wrap", justifyContent:"center", mb:3}}
    >
      {
        techStack.map((tool)=>{
          const Icon = icons[tool]
          return(
            <Grid key={tool} ><TechChip sx={{minWidth:90}} icon = {<Icon color = "white" /> } label={tool} /> </Grid>
          )
        })
      } 
    </Grid>
    

  )
}

const TechChip = styled(Chip)(({ theme }) => ({
  minWidth: 90,
  color: "white",
  backgroundColor: theme.palette.primary.dark
}));

const icons = {
  React: ReactIcon,
  MongoDB: MongoIcon,
  MySQL: MySQLIcon,
  Express: ExpressIcon,
  Node: NodeIcon,
  Python: PythonIcon,
  MaterialUI: MuiIcon,
  Bootstrap: BootstrapIcon,
  Docker: DockerIcon,
  AWS: AWSIcon,
  Typescript: TypescriptIcon
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