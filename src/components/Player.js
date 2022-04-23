import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAMovie } from "../actions/getamovieactions";
import YoutubeIframe from "react-native-youtube-iframe";
import { ActivityIndicator, Colors, Title } from "react-native-paper";

const Player = ({ route }) => {
	const { Id } = route.params;

	const { movie } = useSelector((state) => state.getAMovieReducers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAMovie(Id));
	}, [dispatch, Id]);

	let play;
	if (movie.movie !== undefined) {
		play = movie.movie;
	}

	return (
		<View style={styles.container}>
			{play !== undefined ? (
				<View>
					<YoutubeIframe height={250} videoId={play.url} />
					<Title style={styles.text}>{play.title}</Title>
					<Text style={styles.text}>Cast:{play.cast}</Text>
					<Text style={styles.text}>Language:{play.language}</Text>
					<Title style={styles.text}>Director:{play.director}</Title>
					<Text style={styles.description}>Description:{play.description}</Text>
				</View>
			) : (
				<ActivityIndicator
					style={styles.spinner}
					animating={true}
					color={Colors.red800}
				/>
			)}
		</View>
	);
};

export default Player;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	text: {
		color: "white",
		alignSelf: "center",
	},
	description: {
		color: "white",
		alignSelf: "center",
		paddingHorizontal: 25,
	},
	spinner: {
		marginTop: 50,
	},
});
