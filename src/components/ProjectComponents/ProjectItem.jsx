import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal, updateModal } from "../../redux/slices/modalSlice";
import { useEffect } from "react";

const ProjectItem = ({ project, mouseMoveEvent, mouseLeaveEvent }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(toggleModal());
		dispatch(updateModal({	title: 'Hello', body: 'World' }));
	}, [dispatch])

	return (
		<div className="col-lg-6 col-sm-12">
			<div
				className="project-item"
				style={{backgroundImage: `url(${project.image})`}}
				onMouseMove={mouseMoveEvent}
				onMouseLeave={mouseLeaveEvent}
				onClick={() => {
					dispatch(updateModal({ title: project.name, body: project.content }))
					dispatch(toggleModal())
				}}
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
	)
}

export default ProjectItem;