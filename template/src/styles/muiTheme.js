import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#89cff0',
      light: '#a0d8f3',
      dark: '#5f90a8'
    },
    secondary: {
      main: '#facef5',
      light: '#fbd7f7',
      dark: '#af90ab'
    },
    background: {
      default: '#1e1e1e',
      elevation1: '#232323',
      elevation2: '#2c2c2c',
      elevation3: '#373737',
      paper: '#333333',
    },
    text: {
      primary: '#ebebeb',
      secondary: '#ffffff',
      disabled: '#ffffff',
    },
    error: {
      main: '#e57373',
      light: '#ea8f8f',
      dark: '#a05050'
    },
    success: {
      main: '#5fecaf',
      light: '#7fefbf',
      dark: '#42a57a'
    },
  },

  typography: {
    allVariants: {
      color: '#ebebeb',
    },
    fontFamily: '""'
  }
});

export default muiTheme;