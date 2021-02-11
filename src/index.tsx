import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';

import './index.css';
import { StoreProvider } from './store';
import reportWebVitals from './reportWebVitals';

// import App from './App';
const App = React.lazy(() => import('./App'));
// const HomePage = React.lazy(() => import('./HomePage'));
// const FavPage = React.lazy(() => import('./FavsPage'));
import HomePage from './HomePage';
import FavPage from './FavsPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<React.Suspense fallback={<div>loadding ...</div>}>
				<App path='' />
			</React.Suspense>
			<React.Suspense fallback={<div>loadding ...</div>}></React.Suspense>
			<React.Suspense fallback={<div>loadding ...</div>}></React.Suspense>

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
