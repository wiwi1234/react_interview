import { Routes, Route } from "react-router-dom";
import Home from './pages/index'
import Interview from './pages/Interview'
import './App.css';
import Counter from "./pages/Counter";
import Test from "./pages/test";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/interview" element={<Interview />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		</div>
	);
}

export default App;
