import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal, updateModal } from '../../redux/slices/modalSlice';

const ActivityItem = ({ data, isOdd }) => {

	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(toggleModal(false));
		dispatch(updateModal({	title: 'Hello', body: 'World' }));
	}, [dispatch])

	return (
		<div className={`activity-item ${isOdd ? 'reverse' : ''}`}
			onClick={() => {
				dispatch(updateModal({ title: data.name, body: data.content }))
				dispatch(toggleModal())
			}}>
			<div className="activity-image" style={{backgroundImage: `url(${data.image})`}}></div>
			<div className="activity-content">
				<div className="activity-name">{data.name}</div>
				<div className="activity-date">{data.date}</div>
				<div className="activity-description">{data.description}</div>
			</div>
		</div>
	);
};

export default ActivityItem;
