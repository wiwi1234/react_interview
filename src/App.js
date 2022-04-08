import { Routes, Route } from "react-router-dom";
import Home from './pages/index'
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>嗨 這裡是無毒農：）</h1>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
