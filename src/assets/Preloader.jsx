import React, { useEffect, useState } from 'react';
import '../css/Preloader.css';

const Preloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const checkLoadingStatus = () => {
			setLoading(false);
		};

		window.addEventListener('load', checkLoadingStatus);

		return () => {
			window.removeEventListener('load', checkLoadingStatus);
		};
	}, []);

	return loading ? (
		<div className="preloader">
			<div className="loader"></div>
		</div>
	) : null;
};

export default Preloader;
