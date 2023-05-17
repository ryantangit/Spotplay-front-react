import react, {useState, useEffect} from 'react';
import Song from "./Song"
function User() {
	const uuid = new URLSearchParams(window.location.search).get("uuid");
	const [topFiveArray, setTopFiveArray] = useState([]);
	useEffect(() =>{
		const topFiveSong = async() => {
			try {
				const topFiveResponse = await fetch(`http://localhost:3000/topfivetracks/${uuid}`);
				const topFiveData = await topFiveResponse.json();
				const topFiveObject = await JSON.parse(topFiveData);
				topFiveObject.forEach((song) => {
					setTopFiveArray((topFiveArray)=> [...topFiveArray, song.name]);
				});	
			} catch (error) {
				console.log("something went wrong with fetching from topfivetracks");
			}
		};
		topFiveSong();
	}, []);
  return (
    <div className="User">
      <header className="User-header">
        <p>
			Hello User: {uuid}
        </p> 	
			<Song songs={topFiveArray}/>
      </header>
    </div>
  );
}

export default User;
