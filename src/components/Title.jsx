import React from 'react';

const Title = ({ titleId, children }) => {
	return (
		<div className="title">
			<h2 id={titleId}>{children}</h2>
		</div>
	)
};

export default Title;
