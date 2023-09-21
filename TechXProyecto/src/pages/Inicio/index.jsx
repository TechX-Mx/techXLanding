import React from 'react'
import fondoInicio from "../../assets/fondoInicio.png"
import { Box, Grid } from '@mui/material'
 import Proyectos from '../Proyectos';
import Servicios from '../Servicios';

const Inicio = () => {
  return (
    <div>
{/* Inicio */}
<Box sx={{backgroundColor:"#EFEFEF"
}}> 
      <Box sx={{
        height:"100vh",
        backgroundImage:`url(${fondoInicio})`,
        backgroundRepeat:"no-repeat",
         backgroundSize:"contain",
          
       
      }}>

      </Box>

 <Proyectos/>
 <Servicios/>
 </Box>

    </div>
  )
}

export default Inicio