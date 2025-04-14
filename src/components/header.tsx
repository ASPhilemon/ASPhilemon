import { Typography } from "@mui/material";
import { Button } from '@mui/material';

export function Header(){
  return (
    <div>
      <Typography
        color="primary"
      >
        HELLO WORLD
      </Typography>
      <Button
        variant="outlined"
        color="success"
      >
        HELLO
      </Button>
    </div>

  )
}