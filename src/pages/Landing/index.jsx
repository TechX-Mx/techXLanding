import React, { useEffect, useState } from 'react';
import fondoInicio from '../../assets/fondoInicio.png';
import fondo from '../../assets/fondo.png';
import Trigger from 'react-scroll-trigger';

import { Box, Button, Grid, Typography } from '@mui/material';
import './styles.css';
import { Bounce, Slide } from "react-awesome-reveal";
import about1 from '../../assets/benefit-one.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import celular from '../../assets/benefit-two.png';
import hero from '../../assets/hero.png';
import Stack from '@mui/material/Stack';
const Landing = () => {
  const [inView, setInView] = useState(false);

  const onEnterViewport = () => {
    setInView(true);
  };

  const onExitViewport = () => {
    setInView(false);
  };

  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#red',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div  >
      {/* Imagen de fondo */}
    
      {/*  */}
      <Stack
    direction="row"
    paddingLeft="100px"
    spacing={2}
    className="stack-kenburns    "   
    style={{ backgroundImage: `url(${fondoInicio})`, backgroundRepeat:"no-repeat"}}
    sx={{
      minHeight: '100vh'
    }}
>

        <Item className='scale-in-hor-left'><Slide direction="left" triggerOnce={false} in={inView}>
          <Typography style={{
            paddingTop: "25px",
            textDecoration: 'none', color: 'black', fontSize: "100px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "65px", color: "black" }}>
            Creamos <br />Soluciones  Digitales
          </Typography></Slide>

          <Typography sx={{ fontWeigth: "bold", fontSize: "25px", paddingTop: "20px" }}>
            TechX es una empresa dedicada a brindar servicios <br /> de desarrollo tecnologico para empresas.
          </Typography>
          <Button sx={{ marginTop: "20px", backgroundColor: "blue", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button>
        </Item>
        <Item>
          <img className="animatedBox"
            src={hero}
            style={{ paddingLeft: "550px", paddingTop: "0px", width: '100%', height: '100%', objectFit: 'contain', borderRadius: "10px" }}
          />
        </Item>
      </Stack>
      

      {/*Texto1 */}
      <Box container sx={{ background: 'linear-gradient(to right, #FFFFFF, #808080)', padding: "45px" }}>
        <Box sx={{ width: '100%', paddingTop: "300px" }}>
          <Grid container>
            <Grid item xs={6} paddingBottom={30}>
              <Item>
                <img src={about1}
                  style={{ width: '70%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Slide direction="left" triggerOnce={false} in={inView}>
                  <Typography variant="h2"  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: "700", color: "black" }}>
                   Sobre Nosotros
                  </Typography>
                </Slide>
                <Typography sx={{ fontWeigth: "bold", fontSize: "25px", paddingTop: "20px" }}>
                  Nuestro objetivo es impulsar la transformacion digital en las empresas y ayudarlas a optimizar sus procesos a traves de soluciones tecnologicas innovadoras con un equipo altamente capacitado
                  y con experiencia en diversas disciplinas tecnologicas.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>


      {/*Texto2 */}

      <Box sx={{ width: '100%' }}>

        <Grid container sx={{ background: 'linear-gradient(to right, #808080, #FFFFFF)', padding: "45px" }} >
          <Grid container item xs={6}>
            <Item>                                 <Slide direction="left" triggerOnce={false} in={inView}>
              <Typography variant="h2" fontWeight="700"   style={{ fontFamily: 'Oswald, sans-serif',color:"black" }}
              >     Que hacemos?

              </Typography >  </Slide>


              <Typography sx={{ fontWeigth: "bold", fontSize: "25px", paddingTop: "20px" }}>

               
                Ofrecemos servicios personalizados a las necesidades basicas de cada cliente.        </Typography>
                <Typography sx={{ fontWeigth: "bold", fontSize: "25px", paddingTop: "20px" }}>

                Ya sea que necesites desarrollar una aplicacion movil,una plataforma web o implementar sistemas de automatizacion,en techX contamos con la experiencia y el conocimiento para hacerlo posible.        </Typography>
                <Typography sx={{ fontWeigth: "bold", fontSize: "25px", paddingTop: "20px" }}>

               
                Estamos comprometidos con la excelencia en el servicio y nos esforzamos por brindar soluciones eficientes que impulsen tu exito empresarial en el mundo digital.
              </Typography>
              {/* <Typography variant="h4"   >        About
      </Typography >
      <Typography variant="body1" >  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit. </Typography> */}
            </Item>
          </Grid>
          <Grid item xs={6} display="flex" flexDirection="row" justifyContent="center" paddingTop="100px">
            <Item><img src={celular}
              // alt={`Proyecto ${index + 1}`}
              style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
            /></Item>
          </Grid>
        </Grid>
      </Box>





      {/*Video */}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', paddingTop: "300px",
          background: 'linear-gradient(to right, #FFFFFF, #808080)', padding: "45px"
        }}
      >  <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography sx={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: "32px", color: "black" }} style={{ fontFamily: 'Oswald, sans-serif', }}
          >
            Transformando tu negocio,una solucion tecnologica a la vez    </Typography></Slide>
        {/* <Typography style={{ paddingTop: "20px" }} sx={{ fontWeigth: "normal", fontSize: "16px", textAlign: "center", width: "75%" }} variant="body2">
          <Typography sx={{ color: "gray", fontWeight: 400, fontSize: "18px" }} className='tilde'>
            Hemos trabajado con mas de 20 empresas
          </Typography>
          <Typography sx={{ color: "gray", fontWeight: 400, fontSize: "18px" }} className='tilde'>
            Formamos parte del crecimiento del E-commerce en todo mexico
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "18px", marginBottom: "20px" }} className='tilde'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veniam in distinctio optio eum perspiciatis obcaecati? Deleniti, vel expedita commodi nobis omnis modi! Natus consectetur vitae quaerat laborum delectus quibusdam!
          </Typography>

        </Typography> */}
        

        <iframe
          width="500"
          height="300"
          src="https://www.instagram.com/reel/CykDKGZPPGo/?utm_source=ig_embed&utm_campaign=loading"
          // title="¿Como es una empresa de software por dentro? - Jalasoft" 
          frameborder="10" style={{
            border: "5px solid black", borderRadius: "20px"  // Bordes redondeados
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        
      </Box>

    
        
        
      <Box   sx={{ width: '100%', paddingLeft: "400px",backgroundColor:"gray" }}>
      
    <div className="ticker-move">
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item><Typography  className="ticker-move" sx={{fontSize:"80px"}}> +20</Typography> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography className="ticker-move" sx={{fontSize:"80px"}}>14%</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography className="ticker-move" sx={{fontSize:"80px"}}>3</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography className="ticker-move" sx={{fontSize:"20px"}} >Empresas son con las que hemos trabajado</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography className="ticker-move" sx={{fontSize:"20px"}}>Crecio el comercio electronico en Mexico en 2023</Typography></Item>
        </Grid>
        <Grid item xs={4}><Typography className="ticker-move" sx={{fontSize:"20px"}}>
          <Item>6</Item></Typography>
        </Grid>
      </Grid>
      </div>

    </Box>
    </div>
  );
};

export default Landing;