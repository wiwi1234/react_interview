import { Link } from "react-router-dom";


const Home = () => {
	return (
		<>
			<main>
				<h2>HOME</h2>
			</main>
			<nav>
				<Link to="/about">About</Link>
			</nav>
		</>
	)
}

export default Home