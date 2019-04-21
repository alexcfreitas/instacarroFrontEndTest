import React, { Component } from 'react';
import Timer from 'react-compound-timer';
import _ from 'lodash';
import divider from '../../assets/line.png';
import './styles.css';

class CarDetails extends Component {
	getLastAmount = arr => {
		const orderedBids = _.orderBy(arr, ['createdAt'], ['desc']);
		return _.isEmpty(orderedBids) ? 0 : orderedBids[0].amount;
	};
	formatKm = km => parseInt(km).toLocaleString('pt-BR');

	render() {
		return (
			<div className="box-car-container">
				<div className="list-car-container">
					<div className="box-container">
						<div className="box-header">
							<img
								className="image-car-container"
								src={this.props.car.imageUrl}
								alt=""
							/>
						</div>
						<div className="box-footer">
							<div className="details-container">
								<div className="year-container">
									{' '}
									Marca: {' ' + this.props.car.make}
								</div>
								<div>
									<img className="icon" src={divider} alt="" />
								</div>
								<div className="km-container">
									<span>Modelo: {' ' + this.props.car.model}</span>
								</div>
							</div>

							<hr />
							<div className="details-container">
								<div className="version-container">
									Versao: {' ' + this.props.car.version}
								</div>
							</div>

							<hr />
							<div className="details-container">
								<div className="year-container">
									Ano: {' ' + this.props.car.year}
								</div>
								<div>
									<img className="icon" src={divider} alt="" />
								</div>
								<div className="km-container">
									<span>
										Rodagem: {' ' + this.formatKm(this.props.car.km)} KM
									</span>
								</div>
							</div>

							<hr />
							<div className="make-offer">
								<button
									className=""
									onClick={() => this.props.goToHome(this.props.car.id)}
								>
									Voltar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CarDetails;
