import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import servicio1 from "../../assets/servicio1.png";
import servicio2 from "../../assets/servicio2.png";
import servicio3 from "../../assets/servicio3.png";
import servicio4 from "../../assets/servicio4.png";
import servicio5 from "../../assets/servicio5.png";
import servicio6 from "../../assets/servicio6.png";
import servicio7 from "../../assets/servicio7.png";
import servicio8 from "../../assets/servicio8.png";
import servicio9 from "../../assets/servicio9.png";
import servicio10 from "../../assets/servicio10.png";
import ab from "../../assets/ab.svg";

const Servicios = () => {
  const projectImages = [
    { imageUrl: servicio1, nombre: "Paginas Web" },
    { imageUrl: servicio2, nombre: "Aplicaciones Moviles" },
    { imageUrl: servicio3, nombre: "Inteligencia Artificial" },
    { imageUrl: servicio4, nombre: "Ecommerce" },
    { imageUrl: servicio5, nombre: "Web Scraping" },
    { imageUrl: servicio6, nombre: "Control de Stock" },
    { imageUrl: servicio7, nombre: "Bots Personalizados" },
    { imageUrl: servicio8, nombre: "Mantenimiento" },
    { imageUrl: servicio9, nombre: "Automatizacion de Procesos" },
    { imageUrl: servicio10, nombre: "MarketPlace" },
    // Agrega las URL de las imágenes restantes aquí
  ];
  // useEffect(() => {
  //   // Cuando se carga la página, desplázate a la sección de proyectos
  //   window.location.hash = "#servicios";
  // }, []);
  return (
    <div id="servicios">
      {/* Título de la sección "Proyectos" */}
      <Typography   style={{ fontFamily: 'Playfair Display, serif' }} variant="h4" sx={{ display: "flex", justifyContent: "center" , paddingBottom: '100px', paddingTop: '100px' }}>
        Servicios
      </Typography>

      {/* Grid de proyectos */}
      <Grid container spacing={0} paddingBottom= '100px'  paddingLeft={25}  columns={{ xs: 15, sm: 8, md: 10, lg: 12 }}>
        {projectImages.map((image, index) => (
          <Grid item xs={2} sm={6} md={4} lg={2.25} key={index} sx={{ marginBottom: '50px'  }}>
           <Box
              sx={{
                width: "178px",
                height: "auto", // Altura automática para que se ajuste al contenido
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centrar contenido verticalmente
                transition: 'transform 0.3s',
                 
              }}
            >
              <img
                src={image.imageUrl}
                alt={`Proyecto ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <Typography  style={{ fontFamily: 'Playfair Display, serif' }} 
              sx={{ fontSize: "24px",    
                  
          textAlign: 'center' }}>{image.nombre}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
     </div>
  );
}

export default Servicios;
