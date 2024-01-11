import React from "react";

const SocialLinks = ({ links }) => {
	
	return (
		<div className="social-links">
			{links && links.map(item => (
				<div key={item.link}>
					<a href={item.link} target="_blank" rel="noopener noreferrer" className="social-item"><i className={"fa-brands fa-" + item.icon}></i></a>
				</div>
			))}
		</div>
	);
}

export default SocialLinks;