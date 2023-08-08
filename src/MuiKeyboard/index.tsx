import React, { ChangeEvent, useState } from 'react';
import { Grid, TextField, Box, Slide } from '@mui/material';
import OnScreenKeyboard from 'src/components/OnScreenKeyboard';

const MuiKeyboard = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setInputValue(event.target.value);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setInputValue((pr) => pr.slice(0, pr.length - 1));
    } else {
      setInputValue((pr) => pr + key);
    }
    if (key === 'space') {
      setInputValue((pr) => pr + '');
    }
    if (key === 'reverse') {
      setInputValue((pr) => '');
    }
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <Grid
        sx={{
          paddingRight: 4,
          width: '100%',
          marginLeft: 0,
        }}
        container
        justifyContent="center"
        direction="column"
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
          <Grid container spacing={4} justifyContent="center" direction="row" rowSpacing={1}>
            <Grid item xs={12} md={8}>
              <TextField
                onChange={handleUrlChange}
                placeholder="Оставьте свой отзыв"
                value={inputValue}
                variant="outlined"
                fullWidth
                multiline
                onClick={handleChange}
              />
            </Grid>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center' }}>
                <OnScreenKeyboard onKeyPress={handleKeyPress} />
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiKeyboard;
