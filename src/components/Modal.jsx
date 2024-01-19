import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../redux/slices/modalSlice';

const Modal = ({ isOpen, title, children }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(toggleModal());
	}, [dispatch])

	return (
		<>
			<div className={`modal-wrapper ${isOpen ? 'show' : ''}`} aria-modal aria-hidden tabIndex={-1} role="dialog" >
				<div className="modal">
					<div className="modal-header">
						<button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={() => dispatch(toggleModal())}>
							<i className="fa-light fa-arrow-left"></i>
						</button>
						<h2>{title}</h2>
					</div>
					<div className="modal-body">
						{children}
					</div>
				</div>
			</div>
		</>
	)
};

export default Modal;