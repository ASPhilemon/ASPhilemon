import {
  Typography, Container, Box, Link
} from "@mui/material"

import { useEffect, useState } from "react"

import { GitHub, LinkedIn, X } from "@mui/icons-material"

export default function Footer(){
  const [currentYear, setCurrentYear] : any= useState(null)
  useEffect(()=>{
    setCurrentYear(new Date().getFullYear())
  })
  return(
    <Container
      maxWidth = {false}
      sx={{ display:"flex", justifyContent:"space-around", py:4, backgroundColor:"primary.dark"}}
    >
      <Typography sx={{ color:"primary.contrastText" }}>
        &copy;ASPhilemon {currentYear}
      </Typography>
      <Box sx={{}} >
        <Link href = "https://github.com/ASPhilemon" sx={{mr:3,}}> 
          <GitHub sx={{fontSize:"20px", color:"primary.contrastText"}} />
        </Link>
        <Link href = "https://www.linkedin.com/in/ariko-philemon-217b0a139/" sx={{mr:3, }} >
          <LinkedIn sx={{fontSize:"20px", color:"primary.contrastText"}} />
        </Link>
        <Link href = "https://x.com/philemonAriko" sx={{}} >
          <X sx={{fontSize:"20px", color:"primary.contrastText"}} />
        </Link>
      </Box>


    </Container>
  )
}