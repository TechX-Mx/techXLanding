import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, Slide, Typography } from '@mui/material';
import { useState } from 'react';

const Form = ({ imageUrl, url }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openProjectUrl = () => {
    window.open(url, '_blank'); // Abre la URL en una nueva ventana o pestaña
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Typography>Vista Rápida</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose} TransitionComponent={Slide} transitionDirection="right">
        <DialogContent sx={{ padding: 0, margin: 0 , backgroundColor: 'transparent' }}>
          <img  
            src={imageUrl}
            style={{ width: '100%', height: '100%', borderRadius: 0 }}
            alt="Imagen del proyecto"
          />
          <Typography sx={{ padding: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, weay in the sun.
          </Typography>
          <Button sx={{ padding: 2 }} onClick={openProjectUrl}>Ver Proyecto</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Form;
