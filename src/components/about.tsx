import {
  Container, Typography, Box,
  Button, Grid, Chip, Slide
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

import { useState, useEffect } from "react";

import techStack from "../data/techstack";

import Typewriter from 'react-ts-typewriter';


export default function About(){
  const [animationStatus, setAnimationStatus] = useState({greeting:true, about:false})
  const [completed, setCompleted] = useState(0)
  const greeting = "Hi There, I am Stephen,"
  const about = `a fullstack web developer based in Kampala, Uganda.
  I have over 2 years experience developing and deploying secure,
  scalable & highly available web applications on the AWS Cloud.`

  return(
    <Container id="about" >
      <Typography sx={{ textAlign:"center", mt:4, mb:2, color:"primary.main",}}  variant='h5' >About Me</Typography>
      <Box sx={{maxWidth:400, fontWeight:"light", mx:"auto"}} >
        <Box sx={{ fontWeight:"bold", mb:1}} >
          <TypewriterWrapper
            text = {greeting}
            animation="greeting"
            setAnimationStatus={setAnimationStatus}
            animationStatus={animationStatus}
            nextAnimation={'about'}
            setCompleted = {setCompleted}
            showWait={1000}
          />
        </Box>
        <Box sx={{fontWeight:"light"}} >
          <TypewriterWrapper
              text = {about}
              animation="about"
              setAnimationStatus={setAnimationStatus}
              animationStatus={animationStatus}
              nextAnimation={"contact"}
              setCompleted={setCompleted}
              showWait={1000}
          />
        </Box>
  
      </Box>
      <Box sx={{position:"relative", maxWidth:400, mx:"auto"}} >
        <Box sx={{visibility:"hidden"}} >
          <TechStack />
        </Box>
        { completed >=2 &&  
          <div style={{position:"absolute", left:0, top:0}} className="slide-in" >
            <TechStack/>
          </div>
        }
      </Box>
      <Box sx={{ mb:2, textAlign:"center"}} >
        <TypewriterWrapper
          text = {"Need a fullstack dev on your team?"}
          animation="contact"
          setAnimationStatus={setAnimationStatus}
          animationStatus={animationStatus}
          nextAnimation={null}
          setCompleted={setCompleted}
          showWait={12000}
        />
      </Box>
      <Box sx={{position:"relative", maxWidth:500, mx:"auto"}} >
        <Box sx={{visibility:"hidden"}} >
          <Button color='secondary'  variant='contained' sx={{display:"flex", mx:"auto", py:1.8, px:3}} >Get In Touch</Button>
        </Box>
          { completed >=3 &&  
            <div style={{position:"absolute", left:0, top:0, width:"100%"}} className="slide-in-sm" >
              <Button color='secondary'  variant='contained' sx={{display:"flex", mx:"auto", py:1.8, px:3}} >Get In Touch</Button>
            </div>
          }
        </Box>
    </Container>
  )
}

function TechStack(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    setTimeout(()=>setShow(true), 500)
  })
  return(
    <Grid
      spacing={1}
      container
      sx={{py:3, flexWrap: "wrap", justifyContent:"center"}}
    >
      {
        techStack.map((tool)=>{
          const Icon = icons[tool]
          return(
            <Grid key={tool} ><Chip sx={{opacity: show? 1:0, minWidth:90}} icon = {<Icon/> } label={tool} /> </Grid>
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

function TypewriterWrapper({
  text,
  setAnimationStatus,
  animation,
  nextAnimation,
  animationStatus,
  setCompleted,
  showWait
}){
  const [show, setShow] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  useEffect(()=>{
    setTimeout(()=>setShow(true), showWait)
  }, [])

  return (
    <Box sx={{position:"relative"}} >
      <Box sx={{visibility:"hidden"}} >
        {text}
      </Box>
     { show &&
      <Box sx={{position:"absolute", left:0, top:0, width:"100%"}} >
        {
          animationStatus[animation] &&
          <Typewriter
            speed={20}
            text = {text}
            cursor = {false}
            onFinished={()=>{
              setHasFinished(true)
              if (!hasFinished) setCompleted((prev)=>prev+1)
              if (nextAnimation && !hasFinished) {
                setAnimationStatus({...animationStatus, [nextAnimation]:true})
              }
            }}
        />
        }

      </Box>
      }
    </Box>

  )
}

