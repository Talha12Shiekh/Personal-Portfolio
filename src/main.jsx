import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
