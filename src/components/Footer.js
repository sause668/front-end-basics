import { Typography } from "@mui/material";

export default function Footer() {

    const homeKey = 'home';
  
    return (
        <div style={{pr: '10px'}} >
            <Typography variant="h5" color="white" align="right" sx={{pr: '10px'}} >SOUL SITS</Typography>
            <Typography variant="h6" color="white" align="right" sx={{pr: '10px', pb: '50px'}} >Soul Never Dies</Typography>
            {/* <Typography variant="body1" color="white" align="right">_</Typography> */}

        </div>
    );
}