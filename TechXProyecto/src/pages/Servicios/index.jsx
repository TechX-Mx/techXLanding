import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import js2 from "../../assets/js3.png";
import icono from "../../assets/icono.png";
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
  const chunkSize = 3;
  const [currentChunk, setCurrentChunk] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente grupo de imágenes
      setCurrentChunk((prevChunk) => (prevChunk + 1) % Math.ceil(projectImages.length / chunkSize));
    }, 3000); // Cambiar cada 3 segundos

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, []);

  const chunkedImages = projectImages.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div id="servicios"  >
      {/* Título de la sección "Proyectos" */}
      <Typography style={{ fontFamily: 'Playfair Display, serif'    }}  sx={{ display: "flex", justifyContent: "center", paddingBottom: '100px',  fontSize:"44px" }}>
        Servicios
      </Typography>

      {/* Grid de proyectos */}
      <Grid container justifyContent="center"  columnSpacing={0} rowSpacing={5} paddingBottom='100px' paddingRight={20} paddingLeft={25} columns={{ xs: 15, sm: 8, md: 10, lg: 14.9 }}>
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
      <Carousel
          autoPlay={false}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              color: 'white',
              marginTop: "-200px"
            },
          }}
          NextIcon={<KeyboardArrowRightIcon />}
          PrevIcon={<KeyboardArrowLeftIcon />}
          index={currentChunk}
        >
          {chunkedImages.map((chunk, index) => (
            <Grid backgroundColor="#EFEFEF" container key={index} justifyContent="center" spacing={10}>
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
                        opacity: [0.9, 0.8, 0.7],
                        transform: 'scale(1.1)',
                      },
                      marginLeft: '10px',
                    }}
                  >
                    <img
                      src={js2}
                      alt={`Miembro ${index * chunkSize + subIndex + 1}`}
                      style={{ width: '45%', height: '45%',borderRadius:"50%" }}
                    />
                    <Typography fontSize="18px" sx={{ color: 'black', marginTop: '10px', fontWeight: 'bold' }}>
                      JavaScript
                    </Typography>
                    <Typography fontSize="18px" sx={{ color: 'black', fontWeight: 'bold' }}>
                      {image.nombre}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>

    </div>
  );
}

export default Servicios;
