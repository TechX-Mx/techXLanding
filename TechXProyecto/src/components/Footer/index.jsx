import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.png";

const Footer = () => {
  return (
    <div>
      <Box sx={{
        height: "28vh",
        backgroundColor: "#1E1E1E        ",
        color: "white",
        paddingTop: "20px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Grid container rowSpacing={2} columnSpacing={2}> {/* Ajusta rowSpacing y columnSpacing al mismo valor */}
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={icono1} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography sx={{ fontSize: "30px" }}> TechX </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={icono2} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography> Todos Los derechos Reservados © </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={icono3} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography> Hermosillo, Sonora,Mexico </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Footer;
