import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.css';

// Theming
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, white } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: white
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
