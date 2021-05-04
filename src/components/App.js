import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import aos from 'aos';
import { Toaster } from 'react-hot-toast';

import Header from './header';
import Footer from './footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = lazy(() => import('./home'));
const Verify = lazy(() => import('./verify'));
const ThankYou = lazy(() => import('./thankyou'));
/*  
	Features to add:
	1. when the date gets extended, so findOneAndUpdate
*/

function App() {
	useEffect(() => aos.init(), []);

	const loader = () => (
		<div className="d-flex justify-content-center" data-aos="fade-out">
			<div className="spinner-border" role="status" style={{ marginTop: '50vh' }}>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
	return (
		<div style={{ minHeight: '100vh' }}>
			<BrowserRouter>
				<Suspense fallback={loader}>
					<Header />
					<Toaster />
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/verify" component={Verify}></Route>
						<Route exact path="/thankYou" component={ThankYou} />
						<Redirect to="/" />
					</Switch>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
