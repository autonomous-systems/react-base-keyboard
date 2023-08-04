import {
  Box,
  Card,
  Grid,
  TextField,
  Button,
  useTheme,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slide,
} from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import OnScreenKeyboard from 'src/components/OnScreenKeyboard';
const StartPage = () => {
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
    // <Card
    //   sx={{
    //     p: 2.5,
    //     width: '70%',
    //     display: 'flex',
    //   }}
    // >
    <Grid
      container
      spacing={4}
      justifyContent='center'
      direction='row'
      rowSpacing={1}
    >
      <Grid item xs={12} md={8}>
        <TextField
          onChange={handleUrlChange}
          placeholder='Оставьте свой отзыв'
          value={inputValue}
          variant='outlined'
          fullWidth
          multiline
          onClick={handleChange}
        />
      </Grid>
      <Slide direction='up' in={checked} mountOnEnter unmountOnExit>
        <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center' }}>
          <OnScreenKeyboard onKeyPress={handleKeyPress} />
        </Box>
      </Slide>
      {/* <Grid item xs={12} sm={3} md={4}></Grid> */}
    </Grid>
    // </Card>
  );
};

export default StartPage;
