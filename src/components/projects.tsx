import {
  Container, Grid, Typography, Button,
  Card, CardMedia, CardContent, CardActions,
  List, ListItem, ListItemIcon, ListItemText
} from "@mui/material"

import {
  GitHub as GitHubIcon,
  Language as WebIcon,
  ArrowOutward as ArrowOutwardIcon,
} from '@mui/icons-material'

import projects from "../data/projects"

export default function Projects(){
  return(
    <Container maxWidth={false} sx={{bgcolor:"primary.light", my:8, pb:3}} >
      <Typography color='primary.main' variant='h5' sx={{textAlign: "center", py:3, fontWeight:600}} >Projects</Typography>
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
    <Card component={Grid} sx={{ maxWidth: 345, pb:3, boxShadow:"none", ":hover": {boxShadow:4} }}>
      <CardMedia
        sx={{ height: 240 }}
        image={project.photo}
      />
      <CardContent>
        <Typography sx={{fontSize: 18}} gutterBottom variant="h6">
          {project.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb:2 }}>
          {project.overview}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {project.objective}
        </Typography>
        <Typography sx={{fontSize: 17, mt:2, mb:0, color:"primary.main", fontWeight:900}}  gutterBottom variant="h6" >
          Project Stack
        </Typography>
        <List>
          {
            project.stack.map((tool)=>{
              return(
                <ListItem sx={{p:1}} >
                  <ListItemIcon> { <tool.icon fontSize={"25px"} color ="grey" /> } </ListItemIcon>
                  <ListItemText> { tool.purpose} </ListItemText>
                </ListItem>
              )
            })
          }
        </List>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        <Button href={project.github} variant='outlined' startIcon = {<GitHubIcon/>} endIcon = {<ArrowOutwardIcon/>} target='blank' color='secondary' component="a" size="small" sx={{mr:2}}>REPO</Button>
        <Button href={project.live} variant='outlined' startIcon = {<WebIcon/>} endIcon = {<ArrowOutwardIcon/>} target='blank' color='secondary' component="a" size="small">Live</Button>
      </CardActions>
    </Card>
  )

}