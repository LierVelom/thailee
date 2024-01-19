import React from "react";

const Project = ({ projects, mouseMoveEvent, mouseLeaveEvent, modalEvent }) => {
	return (
		<div className="container-fluid" style={{padding: 0}}>
			<div className="row project-container">
				{projects.map((project, index) => {
					return (
						<div className="col-lg-6 col-sm-12" key={index}>
							<div
								className="project-item"
								style={{backgroundImage: `url(${project.image})`}}
								onMouseMove={mouseMoveEvent}
								onMouseLeave={mouseLeaveEvent}
								onClick={() => {
									modalEvent(project.name, project.content)
								}}
								key={index}
							>
								<div className="project-info">
									<h3 className="project-name"
										data-project-name={project.name}
									>
										{project.name}
									</h3>
									<p className="project-description">{project.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};	

export default Project;