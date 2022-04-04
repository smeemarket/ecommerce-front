import React from 'react';
import { Link } from 'react-router-dom';

export default function Master({children}) {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="#">Smart Watch</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
						</li>
						<li className="nav-item">
										<Link to='/cart' className="nav-link" href="#">Cart
											<span className="badge badge-danger">4</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link" href="#">About</Link>
						</li>
						</ul>
					</div>
				</div>
		
			</nav>
			
			<div className="container mt-3">
				{children}
			</div>
		</React.Fragment>
	)
}
