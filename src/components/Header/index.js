import React, { Component } from 'react';

import logo from '../../assets/logo.png';
import divider from '../../assets/line.png';
import phone from '../../assets/phone.svg';
import user from '../../assets/user.svg';
import './styles.css';

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<div className="itens-header">
					<div>
						<img src={logo} alt="" />
					</div>
					<div>
						<img className="icon" src={divider} alt="" />
					</div>
					<div className="divCenter">
						<img className="icon" src={phone} alt="" />
						<span>(11) 3569 - 3465</span>
					</div>
					<div className="userMenu">
						<img className="icon" src={user} alt="" />
						<h4>User Test</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
