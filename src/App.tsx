import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import grey from '@mui/material/colors/grey';

import Home from './containers/Home';

import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: grey[50],
      },
    },
    typography: {
      fontFamily: [
        'Calibri',
      ].join(',')
    },
    // components: {
    //   MuiPaper: {
    //     styleOverrides: {
    //       root: {
    //         borderRadius: '16px',
    //       },
    //     },
    //   },
    // },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
