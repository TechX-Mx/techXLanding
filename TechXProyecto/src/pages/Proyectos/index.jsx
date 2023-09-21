import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
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

  return (
    <div>
      {/* Título de la sección "Proyectos" */}
      <Typography variant="h4" sx={{ display: "flex", justifyContent: "center", marginBottom: '2rem', marginTop: '80px' }}> {/* Ajusta marginBottom */}
        Proyectos
      </Typography>

      {/* Grid de proyectos */}
      <Grid container rowSpacing={1} columnSpacing={1}> {/* Ajusta rowSpacing y columnSpacing al mismo valor */}
        {projectImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a href={image.url}>
            <Box
              sx={{
                width: "25rem",
                height: "12.5rem",
                borderRadius: "10px",
                backgroundColor: 'rgba(30, 30, 30, 0.56)',
                marginLeft: 'auto', // Elimina el margen izquierdo
                marginRight: 'auto', // Centra horizontalmente
                marginBottom: '2rem', // Ajusta el espacio vertical entre filas
                transition: 'transform 0.3s', // Agrega una transición suave

                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                  transform: 'scale(1.1)', // Escala el elemento al 110% en hover
                }
              }}
            >
                  
              <img
                src={image.imageUrl}
                alt={`Proyecto ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "10px" }}
              /> 
            </Box></a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Proyectos;
