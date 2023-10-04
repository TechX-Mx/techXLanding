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
        className="background-image"
        sx={{
          height: '100vh',
          backgroundImage: `url(${fondoInicio})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >

        <Typography
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
        </Typography>

      </Box>
    </div>
  );
};

export default Landing;
