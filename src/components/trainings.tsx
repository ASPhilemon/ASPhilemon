import {
  Container, Grid, Typography, Button, Box,
  Card, CardMedia, CardContent, CardActions,
  List, ListItem, ListItemIcon, ListItemText,
  Avatar,
} from "@mui/material"

import {
  GitHub as GitHubIcon,
  Language as WebIcon,
  ArrowOutward as ArrowOutwardIcon,
} from '@mui/icons-material'


import trainings from "../data/trainings"

export default function Trainings(){
  return(
    <Container  id="trainings" maxWidth={false} sx={{mt:2}} >
      <Typography color='primary.main' variant='h5' sx={{textAlign: "center", py:3, fontWeight:600}} >Trainings</Typography>
      <Grid container rowSpacing={3} columnSpacing={2} sx={{justifyContent:"center", alignItems:"stretch"}} >
        {
          trainings.map((training, index)=>{
            return(
              <Training key={index} training = {training} ></Training> 
            )
          })
        }
      </Grid>

    </Container>
  )
}

function Training({training}){
  return(
    <Card
      component={Grid}
      sx={{ maxWidth: 345, pb:3, boxShadow:"none", border:1, borderColor:"#D1D5D8", ":hover": {boxShadow:2}}}
    >
      <CardMedia
        sx={{ height: 240, borderBottom: 0, borderColor: "#D1D5DB"}}
        image={training.certificate}
      />
      <CardContent>
        <Typography sx={{fontSize: 18,}} gutterBottom variant="h6">
          {training.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb:2, }}>
          {training.about}
        </Typography>
        <Typography sx={{fontSize: 19, mt:2, mb:0, color:"primary.main", fontWeight:900}}  gutterBottom variant="h6" >
          Skills Gained
        </Typography>
        <List>
          {
            training.skills.map((skill, index)=>{
              const bottomBorder = index == training.skills.length-1? 0 : 1
              return(
                <ListItem key={skill.name} sx={{p:1, borderBottom: bottomBorder, borderColor:"#D1D5D8"}} >
                  <ListItemIcon>
                    <Avatar
                      src = {skill.img}
                      sx={{
                        mr:3,
                        width:"60px",
                        maxHeight:"40px",
                        borderRadius:0,
                        boxShadow:1,
                        transformOrigin:"bottom left",
                        transition: "transform 0.4s",
                        background:"white",
                        p:0.3,
                        ":hover":{
                          transform:"scale(5,5)",
                          transformOrigin:"bottom left",
                          boxShadow:4,
                          border:0,
                          borderColor:"#9CA3AF",
                        }
                      }}
                      variant="square"
                    />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:'light'}} >
                    <Box component={"span"} sx={{fontWeight:500}} > {skill.name} </Box> <br/> 
                    <Box component={"span"} sx={{fontWeight:"light", fontSize:15}} > {skill.about} </Box>
                  </ListItemText>
                </ListItem>
              )
            })
          }
        </List>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center"}} >
        {
          training.capstone.github && 
          <Button
            href={training.capstone.github}
            variant='outlined' startIcon = {<GitHubIcon/>}
            endIcon = {<ArrowOutwardIcon/>}
            target='blank'
            color='secondary'
            component="a"
            size="small" 
            sx={{mr:2}}
          >
            Capstone
          </Button>
        }
        {
          training.capstone.live && 
          <Button
            href={training.capstone.live}
            variant='outlined' startIcon = {<WebIcon/>}
            endIcon = {<ArrowOutwardIcon/>}
            target='blank'
            color='secondary'
            component="a"
            size="small"
          >
            Live
          </Button>
        }
      </CardActions>
    </Card>
  )

}