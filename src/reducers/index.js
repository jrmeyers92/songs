import { combineReducers, compineReducers } from "redux";

export const songReducer = () => {
	return [
		{ title: "no scrubs", duration: "4:05" },
		{ title: "macarena", duration: "2:30" },
		{ title: "all star", duration: "3:49" },
		{ title: "phone home", duration: "4:43" },
	];
};

export const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer,
});
