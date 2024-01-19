import React from 'react';

const Personal = ({	move, leave}) => {
	return (
		<>
			<section className="personal">
				<div className="name">
					LÊ<br />
					HỒNG<br />
					THÁI
				</div>
				<a href="#" className="personal-button"><i className="fa-light fa-arrow-down-to-line"></i> TẢI XUỐNG CV</a>
				<div className="description">
					Một người yêu thích những công việc sáng tạo, thích hoạt động trong những môi trường năng động và không ngừng đổi mới.
				</div>
				<div className="avatar">
					<img src="./images/person.png" />
				</div>	
			</section>
		</>
	);
};

export default Personal;
