import React from 'react';

const PersonalSkills = ({ skills }) => {
	return (
		<div className="personal-skills container-fluid">
			<div className="row g-3">
				{skills.map((skill, index) =>
				(
					<div className="col-lg-4 col-md-6 col-sm-12" key={index}>
						<div className="skill">
							<div className="skill-title">
								<i className={`fa-regular fa-${skill.icon}`}></i>
								{skill.title}
							</div>
							<div className="skill-description">{skill.description}</div>
						</div>
					</div>
				)
				)}
			</div>
		</div>
	);
};

export default PersonalSkills;
