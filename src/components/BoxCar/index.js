import React, { Component } from 'react';
import Timer from 'react-compound-timer';
import _ from 'lodash';
import divider from '../../assets/line.png';
import './styles.css';

class BoxCar extends Component {
	getLastAmount = arr => {
		const orderedBids = _.orderBy(arr, ['createdAt'], ['desc']);
		return _.isEmpty(orderedBids) ? 0 : orderedBids[0].amount;
	};
	render() {
		return (
			<div className="box-car-container">
				<div className="list-car-container">
					{this.props.dataListCars &&
						this.props.dataListCars.map(car => (
							<div className="box-container" key={car.id}>
								<div className="box-header">
									<img
										className="image-car-container"
										src={car.imageUrl}
										alt=""
									/>
									<div className="box-details">
										<span>
											<a onClick={() => this.props.goToDetails(car.id)}>
												{' '}
												ver detalhes{' '}
											</a>
										</span>
									</div>
								</div>
								<div className="box-footer">
									<div className="time-offer-container">
										<div className="time-container">
											<p>TEMPO RESTANTE</p>
											<span>
												<Timer
													initialTime={car.remainingTime}
													direction="backward"
												>
													{() => (
														<React.Fragment>
															<Timer.Hours />:
															<Timer.Minutes />:
															<Timer.Seconds />
														</React.Fragment>
													)}
												</Timer>
											</span>
										</div>
										<div>
											<img className="icon" src={divider} alt="" />
										</div>
										<div className="offer-container">
											<p>ULTIMA OFERTA</p>
											<span>
												R${' '}
												{this.getLastAmount(car.bids).toLocaleString('pt-BR')}
											</span>
										</div>
									</div>
									<hr />
									<div className="describe-container">
										<h3>
											<strong>{`${car.make} ${car.model} ${
												car.version
											}`}</strong>
										</h3>
									</div>
									<hr />
									<div className="year-km-container">
										<div className="year-container">{car.year}</div>
										<div>
											<img className="icon" src={divider} alt="" />
										</div>
										<div className="km-container">
											<span>{car.km.toLocaleString('pt-BR')} KM</span>
										</div>
									</div>

									<hr />
									<div className="make-offer">
										<button
											className=""
											onClick={() =>
												this.props.handleMakeOffer(
													this.getLastAmount(car.bids),
													car
												)
											}
										>
											Fazer Oferta
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default BoxCar;
