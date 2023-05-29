import "./User.css"
import Song from "./Song"
import {useState, useEffect} from 'react';
function User() {
	console.log("=====RENDER START=====")
	const uuid = new URLSearchParams(window.location.search).get("uuid");
	const [topFiveSong, setTopFiveSong] = useState([]);
	useEffect(() =>{
		let active = true;
		const fetchTopFiveSong = async() => {
			try {
				const topFiveResponse = await fetch(`http://localhost:3000/topfivetracks/${uuid}`);
				const topFiveData = await topFiveResponse.json();
				const topFiveObject = await JSON.parse(topFiveData);
				if(active) {
					setTopFiveSong(topFiveObject);
				}
			} catch (error) {
				console.log("something went wrong with fetching from topfivetracks");
			}
		};
		fetchTopFiveSong();
		return () => {
			active = false;
		}
	}, [uuid]);
	console.log(topFiveSong);
  return (
    <div className="User">
      <header className="User-header">
        <p>
			Here are your top five songs!	
        </p> 	
			<Song songs={topFiveSong}/>
     </header>
    </div>
  );
}

export default User;

