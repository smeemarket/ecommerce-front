import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';

const MainRouter = () => {
	return (
		<Routes>
			<Route path='/' exact element={<Home  />} />
			<Route path='/about' element={<About  />} />
		</Routes>
	);
};

export default MainRouter;