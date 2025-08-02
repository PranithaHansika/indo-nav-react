import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>IndoNav Home Page</h1>
      <br />
      <button onClick={() => navigate("/floor1")}>Floor 1</button>
      <br />
      <button disabled>Floor 2</button>
      <br />
      <button disabled>Floor 3</button>
    </div>
  );
}

export default Home;
