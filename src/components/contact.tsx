import { useState } from "react";

import {
  Container,Typography, Button, Box,
  Paper, TextField,
} from "@mui/material"

import Turnstile from "react-turnstile";


export default function Contact(){
  const [humanVerified, setHumanVerified] = useState(false)

  const [formStatus, setFormStatus] = useState("typing")

  console.log("form status", formStatus)

  async function handleSubmit(e){
    e.preventDefault()
    setFormStatus("loading")
    const formData = new FormData(e.target)

    let response;

    try {
      response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
      });
    } catch(e){
      console.log(e)
      setFormStatus("error")
    }
    if(response){
      console.log(response)
      setFormStatus(response.ok ? 'success' : 'error');
    }
  }

  return(
    <Container 
      maxWidth={false}
      sx={{ mt:5, pb:6, bgcolor:"primary.light"}}
      id="contact"
    >
      <Typography
        color='primary.main'
        variant='h5' sx={{textAlign: "center", py:3, fontWeight:600}}
      > Get In Touch </Typography>
      <Box sx={{display:"flex", justifyContent:"center"}}>
        <Paper
          component={"form"}
          onSubmit = {handleSubmit}
          sx={{
            minWidth:"300px",
            maxWidth:"350px",
            bgcolor:"white",
            px:2,
            py:5,
            boxShadow:1
          }}
        >
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Name"
            id="your-name"
            type="text"
            name="name"
            required
          />
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Email"
            id="your-email"
            type="email"
            name="email"
            required
          />
          <TextField
            label="Your message"
            minRows={3}
            required
            fullWidth
            multiline
            name="message"
            sx={{mb:3}}
          />
          <Box sx={{ display:humanVerified? "none":"flex", justifyContent:"center"}}>
            <Turnstile
              sitekey="0x4AAAAAABLiNjG3UqGkZv9_"
              theme="light"
              onVerify={()=>setHumanVerified(true)}
              onExpire={()=>setHumanVerified(false)}
              refreshExpired="auto"
              retry="auto"
              fixedSize
              appearance="execute"
              data-size="flexible"
            />
          </Box> 
          <Box sx={{display:humanVerified? "flex":"none" , justifyContent:"center"}} >
            <Button
              variant="contained"
              sx={{bgcolor:"secondary.main", width:"70%", py:2, boxShadow:4}}
              type="submit"
            > Submit </Button>
          </Box>
 
        </Paper>
      </Box>
    </Container>
  )
}
