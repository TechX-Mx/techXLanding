import React, { useEffect, useState } from 'react';
import fondoInicio from '../../assets/fondoInicio.png';
import { Box, Grid, Typography } from '@mui/material';
import './styles.css';
import { Bounce, Slide } from "react-awesome-reveal";
import about1 from '../../assets/about1.jpg';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import celular from '../../assets/celular.png';

const Landing = () => {
  const [showText, setShowText] = useState(false);
   useEffect(() => {
    setShowText(true);
  }, []);
  const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EFEFEF',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
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
          // '&.bg-pan-bl': {
          //   WebkitAnimation: "bg-pan-tr 8s both infinite",
          //           animation: "bg-pan-tr 8s both infinite",
          // }
        }}
        // className="bg-pan-tr"
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
          Innovacion Tecnologica
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
          Empresa de Desarrollo de Software creando
           soluciones basadas en tecnologia y consultoria.
        </Typography>
      </Box>
      <Box>

      <Box sx={{ width: '100%' }}>

      <Grid container >
      <Grid item xs={6} paddingBottom={30}>
          <Item><img src={about1}
                // alt={`Proyecto ${index + 1}`}
                style={{ width: '70%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
              /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Typography variant="h2"   >        About
</Typography >
<Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.</Typography>
        </Item>
        </Grid> 
        </Grid>
           </Box>

           <Box sx={{ width: '100%' }}>

<Grid container >
<Grid item xs={6}>
<Item><Typography variant="h2"   >        About
</Typography >
<Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
  neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
  quasi quidem quibusdam.</Typography>   
  <Typography variant="h4"   >        About
</Typography >  
<Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit. </Typography>   
  <Typography variant="h4"   >        About
</Typography >  
<Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
  blanditiis tenetur unde suscipit. </Typography>   
  </Item>   
  </Grid>
  <Grid item xs={6} display="flex" flexDirection="row" justifyContent="center" paddingTop="100px">
         <Item><img src={celular}
          // alt={`Proyecto ${index + 1}`}
          style={{ width: '70%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
        /></Item>
  </Grid> 
  </Grid>
     </Box>


      </Box>
    </div>
  );
};

export default Landing;
