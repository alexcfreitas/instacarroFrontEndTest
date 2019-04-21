import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Car from './pages/Car';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/car/:id" component={Car} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
