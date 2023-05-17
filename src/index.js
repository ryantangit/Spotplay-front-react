import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Layout from './Layout';
import NoPage from './NoPage';
import User from './User';

export default function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element = {<Layout />}>
					<Route index element ={<Home />} />
					<Route path="user" element = {<User />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
