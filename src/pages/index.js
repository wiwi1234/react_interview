import { Link } from "react-router-dom";


const Home = () => {
	return (
		<>
			<main>
				<h1>Hi Candidate：）</h1>
			</main>
			<nav>
				<Link to="/interview">Interview</Link>
			</nav>
		</>
	)
}

export default Home