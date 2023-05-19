import Home from './Home';
import Layout from './Layout';
import NoPage from './NoPage';
import User from './User';
import { Routes, Route } from "react-router-dom";

function App(){
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/user" element={<User/>} />
				<Route path="*" element={<NoPage/>} />
			</Routes>
		</div>
	);
}

export default App;
