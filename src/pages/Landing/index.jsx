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
import empresa1 from '../../assets/empresa1.jpg';
import empresa2 from '../../assets/empresa2.jpg';
import empresa3 from '../../assets/empresa3.jpg';
import empresa4 from '../../assets/empresa4.jpg';
import empresa5 from '../../assets/empresa5.jpg';
import empresa6 from '../../assets/empresa6.jpg';
import empresa7 from '../../assets/empresa7.jpg';
import empresa8 from '../../assets/empresa8.jpg';

import fondoNuevo from "../../assets/fondoNuevo.jpg"
import fondo2 from "../../assets/fondo2.jpg"
import sobreN from "../../assets/sobreN.png"

import Stack from '@mui/material/Stack';
 import {    IconButton } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import BookIcon from '@material-ui/icons/Book'; // Símbolo para "Employee Handbook"
// import BarChartIcon from '@material-ui/icons/BarChart'; // Símbolo para "Project Reports"
// import PersonAddIcon from '@material-ui/icons/PersonAdd'; // Símbolo para "Hiring"
// import EventIcon from '@material-ui/icons/Event'; // Símbolo para "Team Updates"
// import ReportIcon from '@material-ui/icons/Report'; // Símbolo para "Annual Report"
// import BulbIcon from '@material-ui/icons/LightbulbOutline'; // Símbolo para "New Products"
// import FavoriteIcon from '@material-ui/icons/Favorite'; // Símbolo para "Company Culture"

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
      <Box style={{ height:"100vh",backgroundImage: `url(${fondoNuevo})`,
       backgroundRepeat:"no-repeat", backgroundSize:"cover",
       display: "flex",  // Activamos Flexbox
    flexDirection: "column",  // Alineamos los elementos en columna
    justifyContent: "center",  // Centramos verticalmente
    alignItems: "center"  // Centramos horizontalmente
      }}
    sx={{
      minHeight: '100vh',
      // paddingLeft:"500px",
      
     }}>
       <Typography sx={{   fontSize: "30px",  color: 'white', fontFamily: "'Oswald', sans-serif", letterSpacing: "5px" }}>
Bienvenido          </Typography>
<Slide direction="left" triggerOnce={false} in={inView}>

   <Typography style={{
            paddingTop: "25px",
            textDecoration: 'none', color: 'white', fontSize: "75px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "100px", color: "black" }}>
            Creamos Soluciones Digitales
          </Typography></Slide>

          <Typography sx={{  letterSpacing: "5px", fontSize: "30px", paddingTop: "20px", color: 'white', fontFamily: "'Oswald', sans-serif" }}>
            TechX  </Typography>
          {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
      </Box>
      {/* <Stack
    direction="row"
    paddingLeft="50px"
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
            textDecoration: 'none', color: 'black', fontSize: "50px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "65px", color: "black" }}>
            Creamos <br />Soluciones  Digitales
          </Typography></Slide>

          <Typography sx={{ fontWeigth: "bold", fontSize: "20px", paddingTop: "20px" }}>
            TechX es una empresa dedicada a brindar servicios <br /> de desarrollo tecnologico para empresas.
          </Typography>
          <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button>
        </Item> */}
        {/* <Item>
          <img className="animatedBox"
            src={hero}
            style={{ paddingLeft: "550px", paddingTop: "0px", width: '100%', height: '100%', objectFit: 'contain', borderRadius: "10px" }}
          />
        </Item> */}
      {/* </Stack> */}


      {/*Texto1 */}
      <Box container sx={{ background: 'linear-gradient(to right, #FFFFFF, #808080)', padding: "45px" }}>
        <Box sx={{ width: '100%', paddingTop: "50px" }}>
          <Grid container spacing={3}>
          <Grid item xs={6} >
              <Item>
              <Slide direction="left" triggerOnce={false} in={inView}>
                  <Typography variant="h2"  style={{fontFamily: 'Oswald, sans-serif',paddingLeft:"75px", fontWeight: "700", color: "black" }}>
                   Sobre Nosotros
                  </Typography>
                </Slide>
                <img src={sobreN}
                  style={{ width: '200%', height: '200%', objectFit: 'contain', borderRadius: "10px" }}
                />
              </Item>
            </Grid>  
            <Grid item xs={6}>
              <Item>
                 
                <Typography sx={{ fontWeigth: "bold", fontSize: "20px", paddingTop: "150px" }}>
                TechX es una empresa dedicada al desarrollo tecnológico, 
                ofreciendo soluciones personalizadas para empresas,
                 como creación de software, páginas web, automatización y programación.
                  Su equipo altamente capacitado y con experiencia en diversas disciplinas tecnológicas se 
                  enfoca en impulsar la transformación digital en las empresas y optimizar sus procesos.
                   TechX se compromete a brindar soluciones eficientes y personalizadas que impulsen
                    el éxito empresarial en el mundo digital.
                </Typography>
              </Item>
            </Grid>  
          </Grid>
        </Box>
      </Box>


      {/* <Box style={{  backgroundColor: 'black', padding: '50px', color: 'white' }}>
      <Slide direction="left" triggerOnce={false} in={inView}>
       <Typography variant="h2"  style={{fontFamily: 'Oswald, sans-serif',paddingLeft:"5px", fontWeight: "700", marginBottom: '30px'}}>

        NUESTRAS SOLUCIONES</Typography>  </Slide>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper style={{borderRadius: '35px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton color="primary">
               
            </IconButton>
            <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Team <br/>  Updates</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{borderRadius: '35px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Employee <br/>  Handbook</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{borderRadius: '35px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Project <br/>  Reports</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{borderRadius: '35px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Hiring</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{ borderRadius: '35px',height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Annual  <br/> Report</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{ borderRadius: '35px',height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">New  <br/> Products</Typography>

          </Paper>
         </Grid>
        <Grid item xs={3}>
          <Paper style={{ borderRadius: '35px',border: '1px solid black',height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography style={{fontFamily: 'Oswald, sans-serif',fontSize:"25px"}} align="center">Company <br/>  Culture</Typography>

          </Paper>
         </Grid>
      </Grid>
    </Box> */}

      {/*Texto2 */}

      {/* <Box sx={{ width: '100%' }}>

        <Grid container sx={{ background: 'linear-gradient(to right, #808080, #FFFFFF)', padding: "45px" }} >
          <Grid container item xs={6}>
            <Item>                                 <Slide direction="left" triggerOnce={false} in={inView}>
              <Typography variant="h2" fontWeight="700"   style={{ fontFamily: 'Oswald, sans-serif',color:"black" }}
              >     Que hacemos?

              </Typography >  </Slide>


              <Typography sx={{ fontWeigth: "bold", fontSize: "20px", paddingTop: "20px" }}>


                Ofrecemos servicios personalizados a las necesidades basicas de cada cliente.        </Typography>
                <Typography sx={{ fontWeigth: "bold", fontSize: "20px", paddingTop: "20px" }}>

                Ya sea que necesites desarrollar una aplicacion movil,una plataforma web o implementar sistemas de automatizacion,en techX contamos con la experiencia y el conocimiento para hacerlo posible.        </Typography>
                <Typography sx={{ fontWeigth: "bold", fontSize: "20px", paddingTop: "20px" }}>


                Estamos comprometidos con la excelencia en el servicio y nos esforzamos por brindar soluciones eficientes que impulsen tu exito empresarial en el mundo digital.
              </Typography>
               
            </Item>
          </Grid>
          <Grid item xs={6} display="flex" flexDirection="row" justifyContent="center" paddingTop="100px">
            <Item><img src={celular}
              // alt={`Proyecto ${index + 1}`}
              style={{ width: '100%', height: '70%', objectFit: 'cover', borderRadius: "10px" }}
            /></Item>
          </Grid>
        </Grid>
      </Box> */}
 


      {/*Video */}

      <Box
        sx={{
          width: '100%',
          height:"75vh",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', paddingTop: "300px",
          background: 'black', padding: "45px" 
        }}
      >  <Slide direction="left" triggerOnce={false} in={inView}>
          <Typography variant="h2" fontWeight="700"   style={{ fontFamily: 'Oswald, sans-serif',color:"white" }}
              >  
            Transformando tu negocio,<br /> una solución tecnológica a la vez    </Typography></Slide>
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


        {/* <iframe
          width="500"
          height="300"
          src="https://www.instagram.com/reel/CykDKGZPPGo/?utm_source=ig_embed&utm_campaign=loading"
          // title="¿Como es una empresa de software por dentro? - Jalasoft"
          frameborder="10" style={{
            border: "5px solid black", borderRadius: "20px"  // Bordes redondeados
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}

      </Box>




      <Box   sx={{
          paddingBottom:"100px", width: '100%', paddingLeft: "150px", background: 'black' }}>

    <div >
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"80px",color:"white"}}> +20</Typography> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"80px",color:"white"}}>14%</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"80px",color:"white"}}>180º</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"20px",color:"white"}} >Son las empresas  con las que hemos trabajado</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography  sx={{fontSize:"20px",color:"white"}}>Creció el comercio electrónico en Mexico en 2023</Typography></Item>
        </Grid>
        <Grid item xs={4}> 
          <Item><Typography   sx={{fontSize:"20px",color:"white"}}>Es el giro  que puede dar tu negocio</Typography></Item> 
        </Grid>
      </Grid>
      </div>

    </Box>
    <Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingTop: "300px",
    background: 'linear-gradient(to right, #FFFFFF, #808080)', 
    padding: "45px"
  }}
>  
  <Slide direction="left" triggerOnce={false} in={inView}>
    <Typography variant="h2" paddingBottom="120px" fontWeight="700" style={{ fontFamily: 'Oswald, sans-serif', color:"black" }}>
      Nuestros Clientes
    </Typography>
  </Slide>
  
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '20px', // Aquí puedes ajustar el espacio entre las imágenes como desees.
    }}
  >
    <img src={empresa1} style={{width: '23%'}} />
    <img src={empresa2} style={{width: '23%'}} />
    <img src={empresa3} style={{width: '23%'}} />
    <img src={empresa4} style={{width: '23%'}} />
    <img src={empresa5} style={{width: '23%'}} />
    <img src={empresa6} style={{width: '23%'}} />
    <img src={empresa7} style={{width: '23%'}} />
    <img src={empresa8} style={{width: '23%'}} />
  </Box>

</Box>
<Box
  style={{ 
    height: "100vh",
    display: "flex", // Añadido para activar flexbox
    flexDirection: "column", // Establece la dirección principal como vertical
    justifyContent: "center", // Centra el contenido en el eje vertical
    alignItems: "center", // Centra el contenido en el eje horizontal
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondo2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }}
>
       
<Slide direction="left" triggerOnce={false} in={inView}>

   <Typography style={{
            paddingTop: "25px",
            textDecoration: 'none', color: 'white', fontSize: "75px", fontFamily: "'Oswald', sans-serif", fontWeight: "700"
          }} sx={{ fontWeight: 700, fontSize: "100px", color: "white" }}>
           Lo que nuestros clientes dicen
          </Typography></Slide>
          <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"15px", color: "white" }}> Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography> </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"15px", color: "white" }}>Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"15px", color: "white" }}>Boost your product and service's credibility by
adding testimonials from your clients. People
love recommendations so feedback from
others who've tried it is invaluable.</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography   sx={{fontSize:"20px", color: "white" }} >Santa Solana Post</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><Typography  sx={{fontSize:"20px", color: "white" }}>Mariana's Luxe Travels</Typography></Item>
        </Grid>
        <Grid item xs={4}> 
          <Item><Typography   sx={{fontSize:"20px", color: "white" }}>Fairhill Journal</Typography></Item> 
        </Grid>
      </Grid>
           
          {/* <Button sx={{ marginTop: "20px", backgroundColor: "black", borderRadius: "100px", height: "50px", width: "150px" }} variant='contained'>Contactanos</Button> */}
      </Box>



    </div>
  );
};

export default Landing;
