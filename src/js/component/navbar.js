import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container bg-light">
			<nav className="navbar navbar-light mb-3">
				<a href="/">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
						alt="logoStarWars"
						style={{ width: '100px', height: 'auto' }}
					/>
				</a>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
						<span className="badge bg-secondary">4</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" href="#">
								Acción 1
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Acción 2
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Acción 3
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
