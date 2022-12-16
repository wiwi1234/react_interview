import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <main>
        <h1>Hi Candidate：）</h1>
      </main>
      <nav>
        <li>
          <Link to="/interview">Interview</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </nav>
    </>
  )
}

export default Home