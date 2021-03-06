import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
	palette: {
		// type: 'dark',
		primary: {
			light: '#000',
			main: '#000',
			dark: '#fff'
		},
		secondary: {
			main: '#f44336',
		},
	},
	typography: { 
	   useNextVariants: true
	}
 });

ReactDOM.render(
	<React.StrictMode>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
