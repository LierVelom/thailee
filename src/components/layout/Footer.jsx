import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="loading-overlay">
				<span className="loader"></span>
				<div className="loading-text"></div>
			</div>

			<div className="color-burn"></div>

			<div className="system">
				<div className="path" style={{ "--diameter": "60vh", "--time": "20s" }}></div>
				<div className="path" style={{ "--diameter": "60vh", "--time": "5s" }}></div>
				<div className="path" style={{ "--diameter": "100vh", "--time": "15s" }}></div>
				<div className="path" style={{ "--diameter": "100vh", "--time": "8s" }}></div>
				<div className="path" style={{ "--diameter": "140vh", "--time": "10s" }}></div>
				<div className="path" style={{ "--diameter": "140vh", "--time": "30s" }}></div>
				<div className="path" style={{ "--diameter": "180vh", "--time": "25s" }}></div>
				<div className="path" style={{ "--diameter": "180vh", "--time": "17s" }}></div>
			</div>
		</>
	);
};

export default Footer;
