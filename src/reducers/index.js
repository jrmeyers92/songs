export const songReducer = () => {
	return [
		{ title: "no scrubs", duration: "4:05" },
		{ title: "macarena", duration: "2:30" },
		{ title: "all star", duration: "3:49" },
		{ title: "phone home", duration: "4:43" },
	];
};

export const selectedSongReduce = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};
