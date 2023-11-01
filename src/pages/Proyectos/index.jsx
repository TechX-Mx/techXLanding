import { Box, Grid, Typography } from '@mui/material';
import React, {    useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {   Slide } from "react-awesome-reveal";

import proyecto2 from "../../assets/proyecto2.png";

const Proyectos = () => {
  const projectImages = [
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2 ,url:"https://www.todofloral.com/",nombre:"Todo Floral"},
    { imageUrl: proyecto2,url:"https://www.todofloral.com/",nombre:"Todo Floral" },
    { imageUrl: proyecto2,url:"https://www.todofloral.com/" ,nombre:"Todo Floral"}
    // Agrega las URL de las imágenes restantes aquí
  ];
  // useEffect(() => {
  //   // Cuando se carga la página, desplázate a la sección de proyectos
  //   window.location.hash = "#proyectos";
  // }, []);
  const [open, setOpen] = useState(false)
  const [inView, setInView] = useState(false);

  const handleOpen = () => {
    setOpen(true)
}

const handleClose = () => {
    setOpen(false)
}
  const [hoverIndex, setHoverIndex] = useState(null);
  const chunkSize = 3;
  const [currentChunk, setCurrentChunk] = useState(0);

 

  const chunkedProjects = projectImages.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
  }, []);
 
  return (
      <div id="proyectos">
         
          <Box sx={{background: 'linear-gradient(to right, #FFFFFF, #808080)' }} paddingTop={10}> 
          <Slide direction="left" triggerOnce={false} in={inView}> 
          <Typography style={{ fontFamily: "'Oswald', sans-serif" }} sx={{ display: "flex", justifyContent: "center", paddingBottom: "100px", paddingTop: '20px', fontSize: "45px" }}>
              Proyectos
          </Typography>  </Slide>
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
                  },
              }}
              NextIcon={<KeyboardArrowRightIcon />}
              PrevIcon={<KeyboardArrowLeftIcon />}
              index={currentChunk}
          >
                {chunkedProjects.map((chunk, index) => (
                <Grid container key={index} justifyContent="center" spacing={10}>
                    {chunk.map((project, subIndex) => (
                        <Grid item xs={12} sm={6} md={3.6} key={subIndex}>
                            <Box
                                sx={{
                                    width: "352px",
                                    height: "350px",
                                    borderRadius: "10px",
                                    marginTop:"50px",
                                    backgroundColor: 'rgba(30, 30, 30, 0.56)',
                                    marginBottom: '2rem',
                                    transition: 'transform 0.3s',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&:hover .projectName': { // Estilo al hacer hover
                                        opacity: 1
                                    }
                                    
                                }}
                                onMouseEnter={() => setHoverIndex(index)}  // Establecer el hoverIndex
                                onMouseLeave={() => setHoverIndex(null)}   // Restablecer el hoverIndex
                            >
                                <img
                                    src={project.imageUrl}
                                    alt={`Proyecto ${index * chunkSize + subIndex + 1}`}
                                    style={{ width: '100%', height: '100%',  borderRadius: "10px" }}
                                />
                                 <Typography 
                style={{ 
                    fontFamily: "'Oswald', sans-serif" ,
                  position: 'absolute',
                  bottom: '-0px',
                  left: '62.5px',
                  backgroundColor: 'gray',
                   padding: '25px 70px',
                  borderRadius: '5px',
                  color: 'black',
                  opacity: hoverIndex === index ? 1 : 0,  // 2. Estilo condicional basado en hoverIndex
                  transition: 'opacity 0.3s',
                  fontWeight:"700px",
                  fontSize:"20px"
                }}
              >
                {project.nombre}
              </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            ))}
          </Carousel></Box>
      </div>
  );
}

export default Proyectos;