import {
  Container,Typography, Button, Box,
  Paper, TextField,
} from "@mui/material"


export default function Contact(){
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
        <Paper component={"form"} sx={{minWidth:"300px", maxWidth:"400px", bgcolor:"white", px:4, py:5, boxShadow:1}} >
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Name"
            id="your-name"
            type="text"
            required
          />
          <TextField
            sx={{mb:3}}
            fullWidth
            label="Your Email"
            id="your-email"
            type="email"
            required
          />
          <TextField
            label="Your message"
            minRows={6}
            required
            fullWidth
            multiline
            sx={{mb:3}}
          />
          <Box sx={{display:"flex", justifyContent:"center"}} >
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