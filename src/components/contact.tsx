import { useRef, useState } from "react";

import {
  Container,Typography, Button, Box,
  Paper, TextField, Alert
} from "@mui/material"

import Turnstile, {useTurnstile} from "react-turnstile";


export default function Contact(){
  const [humanVerified, setHumanVerified] = useState(false)
  const [formStatus, setFormStatus] = useState("typing")
  const formRef = useRef(null)
  const turnstile = useTurnstile()

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
          ref={formRef}
          sx={{
            minWidth:"300px",
            maxWidth:"400px",
            bgcolor:"white",
            px:2,
            py:5,
            boxShadow:1,
            position:"relative",
          }}
        >
          { formStatus == "error" &&
            <Alert
              variant="filled"
              severity="error"
              onClose={()=>{
                setFormStatus("typing")
                setHumanVerified(false)
                turnstile.reset()
              }}
              sx={{
                py:2,
                boxShadow:4,
                mb:2, position:"absolute",
                top:0, zIndex:2,
                left:0,
                width:"100%",
              }}
            >
              An error occured, please try again.
            </Alert>
          }
          { formStatus == "success" &&
            <Alert
              variant="filled"
              severity="success"
              onClose={()=>{
                setFormStatus("typing")
                const form = formRef.current as unknown as HTMLFormElement
                form.reset()
                setHumanVerified(false)
                turnstile.reset()
              }}
              sx={{
                py:2,
                boxShadow:4,
                mb:2, position:"absolute",
                top:0, zIndex:2,
                left:0,
                width:"100%",
              }}
            >
              Your message has been received!
            </Alert>
          }
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Name"
            id="your-name"
            type="text"
            name="name"
            required
            disabled = {formStatus != "typing"}
          />
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Email"
            id="your-email"
            type="email"
            name="email"
            required
            disabled = {formStatus != "typing"}
          />
          <TextField
            label="Your message"
            minRows={3}
            required
            fullWidth
            multiline
            name="message"
            sx={{mb:3}}
            disabled = {formStatus != "typing"}
          />
          <Box sx={{ display: humanVerified? "none":"flex", justifyContent:"center", height:"80px"}}>
            <Turnstile
              sitekey="0x4AAAAAABLiNjG3UqGkZv9_"
              theme="light"
              onVerify={()=>{
                setTimeout(()=>setHumanVerified(true), 1500)
              }}
              onExpire={()=>setHumanVerified(false)}
              refreshExpired="auto"
              retry="auto"
              fixedSize
              appearance="always"
              data-size="compact"
            />
          </Box> 
          <Box sx={{display: humanVerified? "flex":"none" , justifyContent:"center", height:"80px", alignItems:"center"}} >
            <Button
              variant="contained"
              sx={{bgcolor:"secondary.main", width:"70%", py:2, boxShadow:4}}
              type="submit"
              disabled = {formStatus != "typing"}
              loading = {formStatus == "loading"}
            > Submit </Button>
          </Box>
 
        </Paper>
      </Box>
    </Container>
  )
}
