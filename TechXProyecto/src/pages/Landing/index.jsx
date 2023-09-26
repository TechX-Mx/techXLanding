import React from 'react'
import fondoInicio from "../../assets/fondoInicio.png"
import { Box, Grid } from '@mui/material'
import Proyectos from '../Proyectos';
import Servicios from '../Servicios';
 const Landing = () => {
 
  return (
    <div>
      {/* Inicio */}
     
        <Box sx={{
          height: "100vh",
          backgroundImage: `url(${fondoInicio})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",

         }}>
 
        </Box>
     

        {/* Enlace a Servicios */}
          
 
    </div>
  )
}

export default Landing