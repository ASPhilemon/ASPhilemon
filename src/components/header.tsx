import { Typography } from "@mui/material";
import { Button } from '@mui/material';

export function Header(){
  return (
    <div>
      <Typography
        color="primary"
        variant="h2"
      >
        ARIKO STEPHEN PHILEMON
      </Typography>
      <Button
        variant="contained"
        color="success"
      >
        HELLO
      </Button>
    </div>

  )
}