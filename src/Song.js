
function Song(props) {
	const { songs } = props;
	console.log(songs);
	return (
		<div>
			{props.songs[0]}	  
		</div>

		  
  );
}

export default Song;
