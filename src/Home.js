import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
			This app will identify some fun things about you and your spotify usage.
        </p> 
		<a href="http://localhost:3000/login"> Login to Spotify </a>
      </header>
    </div>
  );
}

export default Home;
