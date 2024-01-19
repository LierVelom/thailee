import React from "react";

const ProjectList = ({ children }) => {
	return (
		<div className="container-fluid" style={{padding: 0}}>
			<div className="row project-container">
				{children}
			</div>
		</div>
	);
};	

export default ProjectList;