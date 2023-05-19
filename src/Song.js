
function Song(props) {
	const { songs } = props;
	return (
		<ol>
		{songs.map((song)=> 
			<li key={song.name}>
			<p>{song.name} - {song.album.name}</p>
			{song.artists.map((artist)=>
				<p key={artist.name}>{artist.name}</p>
			)}
			</li>)	
		}
		</ol>

		  
  );
}

export default Song;
