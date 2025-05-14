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
      sx={{bgcolor:"primary.dark", display:"flex", justifyContent:"space-around", py:4}}
    >
      <Typography sx={{ color:"white"}}>
        &copy;ASPhilemon {currentYear}
      </Typography>
      <Box sx={{}} >
        <Link href = "https://github.com/ASPhilemon" sx={{mr:3, color:"white"}}> 
          <GitHub sx={{fontSize:"20px"}} />
        </Link>
        <Link href = "https://www.linkedin.com/in/ariko-philemon-217b0a139/" sx={{mr:3, color:"white"}} >
          <LinkedIn sx={{fontSize:"20px"}} />
        </Link>
        <Link href = "https://x.com/philemonAriko" sx={{color:"white"}} >
          <X sx={{fontSize:"20px"}} />
        </Link>
      </Box>


    </Container>
  )
}