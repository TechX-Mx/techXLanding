import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import whatsapp from "../../assets/t.png";

const Footer = () => {
  const textStyles2 = {
    color: "white",
    textAlign: "center",
    fontWeight: "1000",
    fontSize: "21px",
    lineHeight: "16px",
    fontFamily: "'Mulish', sans-serif",
    position: "relative",
    textTransform: "none"
};
  return (
    <div>
      <Box sx={{
        height: "20vh",
        backgroundColor: "#1E1E1E",
        color: "white",
        // paddingTop: "10px",
        paddingLeft: "20px",
     
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
       }}>
        <Grid container   >
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-start',alignItems: 'center',marginTop:"-20px"  }}>
            <img src={icono1} alt="Logo" style={{ width: "25.97px", height: "25.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography   style={{ fontFamily: 'Playfair Display, serif', fontSize: "48px" }}  >  TechX </Typography>
          </Grid>
          <Grid item xs={5.9} marginTop={-1} sx={{ display: 'flex', justifyContent: 'flex-start',marginTop:"-18px"   }}>
            <img src={icono2} alt="Logo" style={{ width: "25.97px", height: "25.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography   style={textStyles2}> Todos Los derechos Reservados © </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-start'    }}>
            <img src={whatsapp} alt="Logo" style={{ width: "25.97px", height: "25.97px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginTop:"-10px" }}>
            <Typography  paddingTop="30px"  style={textStyles2   }> Hermosillo, Sonora, Mexico </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Footer;

