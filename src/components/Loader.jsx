import React, {useEffect} from 'react';
import { selectLoader, setLoader } from '../redux/slices/loaderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Loader = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoader(true));
	}, [dispatch])

	const isLoading = useSelector(selectLoader);

	return (
		<div className={`loading-overlay ${isLoading ? 'loading' : ''}`}>
			<span className="loader"></span>
			<div className="loading-text"></div>
		</div>
	);
};

export default Loader;
