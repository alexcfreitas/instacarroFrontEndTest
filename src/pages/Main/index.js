import React, { Component } from 'react';
import _ from 'lodash';
import FirebaseService from '../../services/FirebaseService';
import BoxCar from '../../components/BoxCar';
import Header from '../../components/Header';

import './styles.css';

export default class Main extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		FirebaseService.getDataList('cars', dataReceived => {
			this.setState({ data: dataReceived });
		});
	}
	goToDetails = id => {
		this.props.history.push(`/car/${id}`);
	};
	handleMakeOffer = (amount, car) => {
		const indexCar = _.findIndex(this.state.data, ['id', car.id]);
		const newOffer = amount + 250;
		const date = new Date();
		console.log(date);
		const newid = FirebaseService.pushData(`cars/${indexCar}/bids`, {
			amount: parseInt(newOffer, 10),
			createdAt: date.toISOString(),
			channel: 'Web',
			dealership: 'Instacarro'
		});
		console.log(newid);
	};

	render() {
		return (
			<div id="main-container">
				<Header />
				<BoxCar
					dataListCars={this.state.data}
					handleMakeOffer={this.handleMakeOffer}
					goToDetails={this.goToDetails}
				/>
			</div>
		);
	}
}
