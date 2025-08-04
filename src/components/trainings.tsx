import {
  Container, Grid, Typography, Button, Box,
  Card, CardMedia, CardContent, CardActions, CardActionArea,
  List, ListItem, ListItemIcon, ListItemText,
  Avatar,
} from "@mui/material"

import {
  GitHub as GitHubIcon,
  Language as WebIcon,
  ArrowOutward as ArrowOutwardIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'

import { SlideBox } from "./slide-card"

import { useState } from "react"


import trainings from "../data/trainings"

export default function Trainings(){
  return(
    <Container  id="trainings" maxWidth={false} sx={{py:2}} >
      <Typography variant='h5' sx={{textAlign: "center", py:3, fontWeight:600, color:"primary.dark"}} >Trainings</Typography>
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

  const [skills, setSkills] = useState(training.skills.slice(0, 15))

  return(
    <SlideBox>
      <Card
        component={Grid}
        sx={{
          maxWidth: 345,
          pb:3,
          border:1,
          borderColor:"#D3D3D3",
          boxShadow: 0,
          ":hover": {
            boxShadow:3
          },
          height: "100%"
        }}
      >
        <CardActionArea component = "a" href = {training.certificateURL} target="blank" >
          <CardMedia
            sx={{ height: 240, borderBottom: 0}}
            image={training.certificate}
          />
        </CardActionArea>
        <CardContent>
          <Typography sx={{fontSize: 18, color:"primary.dark"}} gutterBottom variant="h6">
            {training.name}
          </Typography>
          <Typography sx={{ mb:2, }}>
            {training.about}
          </Typography>
          <Typography sx={{fontSize: 19, mt:2, mb:0, fontWeight:900, color:"primary.dark"}}  gutterBottom variant="h6" >
            Skills Gained
          </Typography>
          <Box
            sx = {{
              
            }}
          >
            <List>
              {
                skills.map((skill, index)=>{
                  const bottomBorder = index == skills.length-1? 0 : 1
                  return(
                    <ListItem key={skill.name} sx={{p:1, borderBottom: bottomBorder, borderColor:"primary.dark"}} >
                      <ListItemIcon>
                        <Avatar
                          src = {skill.img}
                          sx={{
                            mr:3,
                            width:"60px",
                            maxHeight:"40px",
                            borderRadius:0,
                            transformOrigin:"bottom left",
                            transition: "transform 0.4s",
                            p:0.3,
                            background:"white",
                            ":hover":{
                              transform:"scale(4,4)",
                              transformOrigin:"bottom left",
                              boxShadow:4,
                              border:0,
                            }
                          }}
                          variant="square"
                        />
                      </ListItemIcon>
                      <ListItemText sx={{fontWeight:'light'}} >
                        <Box component={"span"} sx={{fontWeight:400, color:"primary.dark"}} > {skill.name} </Box> <br/> 
                        <Box component={"span"} sx={{fontWeight:"light", fontSize:15}} > {skill.about} </Box>
                      </ListItemText>
                    </ListItem>
                  )
                })
              }
            </List>
            {
              training.skills.length > 15 &&
              <Button
                variant="outlined"
                endIcon = { skills.length < training.skills.length?
                  <KeyboardArrowDownIcon/>:
                  <KeyboardArrowUpIcon/>
                }
                sx={{display:"flex", mx:"auto", mb:3}}
                onClick = {()=>{
                  setSkills( skills.length < training.skills.length?
                    training.skills:
                    training.skills.slice(0, 3)
                  )
                }}
                >
                { skills.length < training.skills.length? "MORE" : "LESS" }
              </Button>
            }
          </Box>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}} >
          {
            training.capstone.github && 
            <Button
            color="secondary"
              href={training.capstone.github}
              variant='outlined' startIcon = {<GitHubIcon/>}
              endIcon = {<ArrowOutwardIcon/>}
              target='blank'
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
            color="secondary"
              href={training.capstone.live}
              variant='outlined' startIcon = {<WebIcon/>}
              endIcon = {<ArrowOutwardIcon/>}
              target='blank'
              component="a"
              size="small"
            >
              Live
            </Button>
          }
        </CardActions>
      </Card>
    </SlideBox>
  )

}