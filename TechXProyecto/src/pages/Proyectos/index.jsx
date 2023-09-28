import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import proyecto2 from "../../assets/proyecto2.png";
import servicio1 from "../../assets/servicio1.png";
import fondoInicio from "../../assets/fondoInicio.png"

const Proyectos = () => {
  const projectImages = [
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" },
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/"},
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/"},
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" }
    // Agrega las URL de las imágenes restantes aquí
  ];
  // useEffect(() => {
  //   // Cuando se carga la página, desplázate a la sección de proyectos
  //   window.location.hash = "#proyectos";
  // }, []);
  return (
    <div id="proyectos">
    {/* Título de la sección "Proyectos" */}
    <Typography style={{ fontFamily: 'Playfair Display, serif' }} sx={{ display: "flex", justifyContent: "center", paddingBottom: "100px", paddingTop: '0px',fontSize:"45px" }}>
      Proyectos
    </Typography>

    {/* Grid de proyectos */}
    <Grid container rowSpacing={0.5} columnSpacing={5}>
      {projectImages.map((image, index) => (
        <Grid item xs={12} sm={6} md={3.6} key={index}>
          <a href={image.url} target="_blank" rel="noopener noreferrer">
            <Box
              sx={{
                width: "382.52px", // 100% - 68px izquierda - 68px derecha
                height: "239.16px",
                borderRadius: "10px",
                backgroundColor: 'rgba(30, 30, 30, 0.56)',
                marginLeft: '68px',
                marginRight: '68px',
                marginBottom: '2rem',
                transition: 'transform 0.3s',
               
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'scale(1.1)',
                  
                }
              }}
            >
              <img
                src={image.imageUrl}
                alt={`Proyecto ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "10px" }}
              />
            </Box>
          </a>
        </Grid>
      ))}
    </Grid>
  </div>
);
}

export default Proyectos;