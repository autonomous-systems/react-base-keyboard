import react, { useState } from 'react';
import { Box, Button, Card, Grid, Modal } from '@mui/material';
import StartPage from 'src/tools/startPage';

const AllTools = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* <Box
        sx={{
          position: 'relative',
          display: 'block',
          pt: '110px',
          ml: {
            lg: '290px',
            md: '290px',
            xs: 'none',
          },
        }}
      > */}
      {/* <Box sx={{ display: 'block' }}> */}
      <Grid
        sx={{
          paddingRight: 4,
          width: '100%',
          marginLeft: 0,
        }}
        container
        justifyContent='center'
        direction='column'
        spacing={4}
      >
        <Grid
          item
          xs={11}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <Button onClick={handleOpen}>Оставить отзыв</Button>
          <Modal
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            open={open}
            onClose={handleClose}
          > */}
          <StartPage />
          {/* </Modal> */}
        </Grid>
      </Grid>
      {/* </Box> */}
      {/* </Box> */}
    </>
  );
};

export default AllTools;
