import React, { useState } from 'react';

const Navbar = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const handleNavbarToggle = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<>
			<nav className={`navbar ${isNavbarOpen ? 'show' : ''}`} onClick={() => setIsNavbarOpen(false)}>
				<ul className="navbar-menu">
					<li className="navbar-item">
						<a href="#About" className="navbar-link">About</a>
					</li>
					<li className="navbar-item">
						<a href="#Skills" className="navbar-link">Kỹ năng</a>
					</li>
					<li className="navbar-item">
						<a href="#Projects" className="navbar-link">Dự án</a>
					</li>
					<li className="navbar-item">
						<a href="#Work" className="navbar-link">Làm việc</a>
					</li>
					<li className="navbar-item">
						<a href="#Activities" className="navbar-link">Hoạt động</a>
					</li>
				</ul>
			</nav>
			<button type="button" className="navbar-toggle" onClick={handleNavbarToggle}>
				<i className="fa-light fa-bars fa-2x"></i>
			</button>
		</>
	);
};

export default Navbar;
