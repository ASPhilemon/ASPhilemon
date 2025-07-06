import {
  Container, Grid, Typography, Button,
  Card, CardMedia, CardContent, CardActions,
  List, ListItem, ListItemIcon, ListItemText,
  Box
} from "@mui/material"

import {
  GitHub as GitHubIcon,
  Language as WebIcon,
  ArrowOutward as ArrowOutwardIcon,
} from '@mui/icons-material'

import {
  SiMongodb as MongoIcon,
  SiNodedotjs as NodeIcon,
  SiReact as ReactIcon,
  SiExpress as ExpressIcon,
  SiJest as JestIcon,
} from 'react-icons/si';

import { blue } from "@mui/material/colors";

import projects from "../data/projects"

export default function Projects(){
  return(
    <Container id="projects" maxWidth={false} sx={{py:3, backgroundColor:"primary.light"}} >
      <Typography variant='h5' sx={{textAlign: "center", py:3, fontWeight:600, color: "primary.main"}} >Projects</Typography>
      <Grid container rowSpacing={3} columnSpacing={2} sx={{justifyContent:"center", alignItems:"stretch"}} >
        {
          projects.map((project, index)=>{
            return(
              <Project key={index} project={project} ></Project> 
            )
          })
        }
      </Grid>

    </Container>
  )
}

function Project({project}){
  return(
    <Card component={Grid} sx={{ maxWidth: 345, pb:3, boxShadow:"none", ":hover": {boxShadow:2} }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project.photo}
      />
      <CardContent>
        <Typography sx={{fontSize: 18, color:"primary.dark"}} gutterBottom variant="h6">
          {project.name}
        </Typography>
        <Typography sx={{  mb:2 }}>
          {project.overview}
        </Typography>
        <Typography sx={{}}>
          {project.objective}
        </Typography>
        <Typography sx={{fontSize: 17, mt:2, mb:0, fontWeight:900, color:"primary.dark"}}  gutterBottom variant="h6" >
          Project Stack
        </Typography>
        <List>
          {
            project.stack.map((tool)=>{
              const Icon = icons[tool.name]
              return(
                <ListItem key={tool.name} sx={{p:1}} >
                  <ListItemIcon> { <IconWrapper Icon = {Icon} /> } </ListItemIcon>
                  <ListItemText> { tool.purpose} </ListItemText>
                </ListItem>
              )
            })
          }
        </List>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <Button color="secondary" href={project.github} variant='outlined' startIcon = {<GitHubIcon/>} endIcon = {<ArrowOutwardIcon/>} target='blank' component="a" size="small" sx={{mr:2}}>REPO</Button>
        <Button color="secondary" href={project.live} variant='outlined' startIcon = {<WebIcon/>} endIcon = {<ArrowOutwardIcon/>} target='blank' component="a" size="small">Live</Button>
      </CardActions>
    </Card>
  )

}

const icons = {
  React: ReactIcon,
  MongoDB: MongoIcon,
  Express: ExpressIcon,
  Node: NodeIcon,
  Jest: JestIcon,
}
function IconWrapper({Icon}){
  return(
    <Box sx={{
      width:"40px",
      height:"40px",
      transition: "transform 0.3s",
      transformOrigin: "bottom left",
      background:"white",
      ":hover": {
        transform: "scale(3, 3)",
        transformOrigin:"bottom left"},
        boxShadow:1,
        p:1,
        mr:2
    }}>
      <Icon color={blue[300]} size = "100%" />
    </Box>
  )
}