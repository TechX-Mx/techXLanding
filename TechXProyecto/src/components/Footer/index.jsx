import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import icono1 from "../../assets/icono1.png";
import icono2 from "../../assets/icono2.png";
import icono3 from "../../assets/icono3.png";

const Footer = () => {
  return (
    <div>
      <Box sx={{
        height: "32vh",
        backgroundColor: "#1E1E1E",
        color: "white",
        paddingTop: "20px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between" ,
                alignItems: "flex-end", // Alinea los elementos al final

      }}>
        <Grid container rowSpacing={2} columnSpacing={4} > {/* Establece el mismo valor para rowSpacing y columnSpacing */}
          <Grid item xs={5.9}  sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img src={icono1} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9}  sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "48px" }}> TechX </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img src={icono2} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" }}> Todos Los derechos Reservados © </Typography>
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex',justifyContent: 'flex-start', alignItems: 'center',marginTop:"20px" }}>
            <img src={icono3} alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Grid>
          <Grid item xs={5.9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" }}> Hermosillo, Sonora, Mexico </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Footer;

