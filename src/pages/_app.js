import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@/styles/globals.css'
import { blue, teal } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: blue.A700,
    },
    secondary: {
      main: blue.A400,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Audiowide, cursive',
    },
    h2: {
      fontFamily: 'Audiowide, cursive',
    },
    h3: {
      fontFamily: 'Audiowide, cursive',
    },
    h4: {
      fontFamily: 'Bungee, cursive',
    },
    h5: {
      fontFamily: 'Bungee, cursive',
    },
    h6: {
      fontFamily: 'Rubik, sans-serif',
    },
    body1: {
      fontFamily: 'Rubik, sans-serif',
    },
    body2: {
      fontFamily: 'Rubik, sans-serif',
    },
    code: {
      fontFamily: 'Source Code Pro, monospace',
      fontSize: 18,
    },

  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": { // <-- mixing the two classes
            color: "white",
            backgroundColor: "#2962ff",
            borderRadius: '7px'
          }
        }
      }
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
