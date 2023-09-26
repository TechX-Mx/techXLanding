import { Box, Typography, IconButton, Grid } from '@mui/material';
import React from 'react';
import miembro1 from "../../assets/miembro1.png";
import miembro2 from "../../assets/miembro2.png";
import miembro3 from "../../assets/miembro3.png";
import miembro4 from "../../assets/miembro4.png";
import miembro5 from "../../assets/miembro5.png";
import miembro6 from "../../assets/miembro6.png";
import miembro7 from "../../assets/miembro7.png";
import miembro8 from "../../assets/miembro8.png";
import miembro9 from "../../assets/miembro9.png";
import miembro10 from "../../assets/miembro10.png";
import Carousel from 'react-material-ui-carousel';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Nosotros = () => {
  const projectImages = [
    { imageUrl: miembro1, profesion: "CEO", nombre: "Mario Eduardo Diaz" },
    { imageUrl: miembro2, profesion: "QA and Fullstack Developer", nombre: "Luis Luna" },
    { imageUrl: miembro3, profesion: "Sr. Fullstack Developer", nombre: "Facundo Moreyra" },
    { imageUrl: miembro4, profesion: "Jr. Fullstack Developer", nombre: "Santiago Mercado" },
    { imageUrl: miembro5, profesion: "Jr. Fullstack Developer", nombre: "Franco Sassi" },
    { imageUrl: miembro6, profesion: "Jr. Fullstack Developer", nombre: "Alejandro Bardabid" },
    { imageUrl: miembro7, profesion: "UX/UI Designer", nombre: "Antonella Olearo" },
    { imageUrl: miembro8, profesion: "Intern", nombre: "Jim" },
    { imageUrl: miembro9, profesion: "Community Manager", nombre: "Mariana" },
    { imageUrl: miembro10, profesion: "Sales Manager", nombre: "Leo" },
    // Agrega las URL de las imágenes restantes aquí
  ];

  // Divide las imágenes en grupos de tres
  const chunkedImages = [];
  for (let i = 0; i < projectImages.length; i += 3) {
    chunkedImages.push(projectImages.slice(i, i + 3));
  }

  return (
    <div>
     <Box sx={{ backgroundColor: "#EFEFEF"}}> 

      {/* Título de la sección "Proyectos" */}
      <Typography  style={{ fontFamily: 'Playfair Display, serif' }} variant="h4" sx={{ display: "flex", justifyContent: "center",paddingTop:"62px",marginBottom:"100px" }}>
        Sobre Nosotros
      </Typography>
 
      {/* Carrusel de proyectos */}
      <Carousel  
        autoPlay={false} // Desactiva la reproducción automática
        animation="slide" // Tipo de animación
        indicators={false} // Desactiva los indicadores de navegación
        navButtonsAlwaysVisible // Muestra las flechas de navegación siempre
        navButtonsProps={{ // Estilos de las flechas de navegación
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '50%',
            color: 'white', 
            marginTop:"-200px"
           },
        }}
        
        NextIcon={<KeyboardArrowRightIcon />} // Icono de flecha derecha
        PrevIcon={<KeyboardArrowLeftIcon />} // Icono de flecha izquierda
      >
        {chunkedImages.map((chunk, index) => (
          <Grid        backgroundColor= "#EFEFEF"
          container key={index} justifyContent="center" spacing={10}>
            {chunk.map((image, subIndex) => (
              <Grid item key={subIndex}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    transition: 'transform 0.3s',

                    '&:hover': {
                      // backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                      transform: 'scale(1.1)',
                    },
                    marginLeft: '10px',
                  }}
                >
                  <img
                    src={image.imageUrl}
                    alt={`Miembro ${index * 3 + subIndex + 1}`}
                    style={{ width: '50%', height: '50%', objectFit: 'cover' }}
                  />
                  <Typography fontSize="18px" sx={{ color: 'black', marginTop: '10px', fontWeight: 'bold' }}>
                    {image.profesion}
                  </Typography>
                  <Typography fontSize="18px" sx={{ color: 'black', fontWeight: 'bold' }}>
                    {image.nombre}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>        </Box>
    </div>
  );
}

export default Nosotros;
