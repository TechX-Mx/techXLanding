import React, { useEffect, useState } from 'react';
import fondoInicio from '../../assets/fondoInicio.png';
import { Box, Typography } from '@mui/material';
import './styles.css';
import { Bounce, Slide } from "react-awesome-reveal";

const Landing = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div>
      {/* Inicio */}
      <Box
        sx={{
          height: '100vh',
          backgroundColor:"white",
          backgroundImage: `url(${fondoInicio})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          // Aplica la clase CSS de animación a la imagen de fondo
          '&.bg-pan-bl': {
            WebkitAnimation: "bg-pan-tr 8s both infinite",
                    animation: "bg-pan-tr 8s both infinite",
          }
        }}
        className="bg-pan-tr"
        // Aplica la clase CSS de animación al div que contiene la imagen de fondo
       >

        {/* <Typography
          style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '62px',
            marginBottom: '100px',
            overflow: 'hidden',
          }}
        >
          <Bounce
            cascade
            delay={1000}
          
          >
            <span>T</span>
            <span>e</span>
            <span>c</span>
            <span>h</span>
            <span>X</span>
          </Bounce>
        </Typography> */}
  <Typography className="track"
           style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h1"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '62px',
            marginBottom: '100px',
            overflow: 'hidden',
          }}
        >
          TechX
        </Typography>
        <Typography className="track2"
           style={{ fontFamily: 'Playfair Display, serif' }}
          variant="h4"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '2px',
             overflow: 'hidden',
          }}
        >
          Empresa de Desarrollo de Software
        </Typography>
      </Box>
    </div>
  );
};

export default Landing;
