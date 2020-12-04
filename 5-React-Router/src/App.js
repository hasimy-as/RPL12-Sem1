import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import { Link } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<nav class='navbar navbar-expand-lg navbar-light bg-light'>
					<div
						class='collapse navbar-collapse'
						id='navbarNavDropdown'>
						<ul class='navbar-nav'>
							<li class='nav-item active'>
								<a class='nav-link' href='/'>
									Beranda{' '}
									<span class='sr-only'>(current)</span>
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='tentangsaya'>
									Tentang Saya
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='karya'>
									Karya
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='kontak'>
									Kontak
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<p>
					<Main />
				</p>
			</div>
		);
	}
}

export default App;
