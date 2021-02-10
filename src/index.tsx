import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';

import './index.css';
import { StoreProvider } from './store';
import reportWebVitals from './reportWebVitals';

import App from './App';
import HomePage from './HomePage';
import FavPage from './FavsPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<App path='' />

			<Router>
				<RouterPage pageComponent={<HomePage />} path='/' />
				<RouterPage pageComponent={<FavPage />} path='/favs' />
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
