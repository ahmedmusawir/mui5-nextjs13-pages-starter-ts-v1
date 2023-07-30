import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    // h1: {
    //   fontSize: '2rem',
    //   fontWeight: 700,
    // },
    // h2: {
    //   fontSize: '1.5rem',
    //   fontWeight: 500,
    // },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
