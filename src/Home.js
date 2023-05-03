import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
			This app will identify some fun things about you and your spotify usage.
			//TODO: Remove this and turn it into a button, then make the button look good.
			<a href="http://localhost:3000/login"> Login to Spotify </a>
        </p> 
      </header>
    </div>
  );
}

export default Home;
