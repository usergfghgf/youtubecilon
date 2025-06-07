import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff0000', // Retain YouTube's red for branding
    },
    background: {
      default: '#121212', // Dark background for clean look
      paper: '#1e1e1e', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff', // White for high contrast
      secondary: '#b0b0b0', // Softer gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif', // Modern, professional font
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.95rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          padding: '8px 16px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});