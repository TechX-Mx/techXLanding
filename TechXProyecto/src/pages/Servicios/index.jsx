import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif3.gif";
import gif4 from "../../assets/gif4.gif";
import gif5 from "../../assets/gif5.gif";
import gif6 from "../../assets/gif6.gif";
import gif7 from "../../assets/gif7.gif";
import gif8 from "../../assets/gif8.gif";
import gif9 from "../../assets/gif9.gif";
import gif10 from "../../assets/gif10.gif";
import ab from "../../assets/ab.svg";
import icono from "../../assets/icono.png";

const Servicios = () => {
  const projectImages = [
    { imageUrl: gif10, nombre: "Paginas Web" },
    { imageUrl: gif1, nombre: "Aplicaciones Moviles" },
    { imageUrl: gif2, nombre: "Inteligencia Artificial" },
    { imageUrl: gif3, nombre: "Ecommerce" },
    { imageUrl: gif4, nombre: "Web Scraping" },
    { imageUrl: gif5, nombre: "Control de Stock" },
    { imageUrl: gif6, nombre: "Bots Personalizados" },
    { imageUrl: gif7, nombre: "Mantenimiento" },
    { imageUrl: gif8, nombre: "Automatizacion de Procesos" },
    { imageUrl: gif9, nombre: "MarketPlace" },
    // Agrega las URL de las imágenes restantes aquí
  ];

  return (
    <div id="servicios">
      {/* Título de la sección "Proyectos" */}
      <Typography style={{ fontFamily: 'Playfair Display, serif'    }}  sx={{ display: "flex", justifyContent: "center", paddingBottom: '100px', paddingTop: '100px',fontSize:"44px" }}>
        Servicios
      </Typography>

      {/* Grid de proyectos */}
      <Grid container justifyContent="center"   rowSpacing={15} paddingBottom='100px' paddingLeft={15} columns={{ xs: 15, sm: 8, md: 10, lg: 13.1 }}>
        {projectImages.map((image, index) => (
          <Grid item xs={2} sm={6} md={4} lg={2.5} key={index} sx={{ marginBottom: '50px' }}>
            <Box
              sx={{
                width: "114px",
                height: "104px", // Altura automática para que se ajuste al contenido
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centrar contenido verticalmente
                transition: 'transform 0.3s',
              }}
            >
              <img
                src={image.imageUrl}
                alt={`Proyecto ${index + 1}`} 
                style={{ width: '100%', height: 'auto', objectFit: 'cover',  borderRadius: '11px  ', // Agrega un borde de 1px negro
              }}
              />
              <Typography style={{ fontFamily: 'Playfair Display, serif' }}
                sx={{
                  fontSize: "17px",
                  textAlign: 'center',
                }}>{image.nombre}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Servicios;
