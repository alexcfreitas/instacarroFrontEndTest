import React, { Component } from 'react';
import _ from 'lodash';
import FirebaseService from '../../services/FirebaseService';
import CarDetails from '../../components/CarDetails';
import Header from '../../components/Header';

import './styles.css';

export default class Car extends Component {
	state = {
		data: [],
		car: {}
	};

	componentDidMount() {
		const carId = this.props.match.params.id;
		FirebaseService.getDataList('cars', dataReceived => {
			const car = _.find(dataReceived, car => car.id === carId);
			this.setState({ data: dataReceived, car: car });
		});
	}

	goToHome = event => {
		this.props.history.push(`/`);
	};

	render() {
		return (
			<div id="main-container">
				<Header />
				<CarDetails car={this.state.car} goToHome={this.goToHome} />
			</div>
		);
	}
}
