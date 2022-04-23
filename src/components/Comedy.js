import {
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	FlatList,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComedyMovies } from "../actions/comedyactions";
import { Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Comedy = () => {
	const { movies } = useSelector((state) => state.comedyReducers);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	useEffect(() => {
		dispatch(getComedyMovies());
	}, [dispatch]);
	return (
		<>
			{movies.movies !== undefined ? (
				<>
					<Title
						style={{ color: "white", alignSelf: "center", fontWeight: "900" }}
					>
						Comedy Movies
					</Title>
					<FlatList
						horizontal
						data={movies.movies}
						keyExtractor={(item) => item._id}
						renderItem={({ item }) => (
							<TouchableWithoutFeedback
								onPress={() => {
									navigation.navigate("Player", {
										Id: item._id,
									});
								}}
							>
								<Image
									style={styles.comedy}
									source={{ uri: item.photo.secure_url }}
								/>
							</TouchableWithoutFeedback>
						)}
					/>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default Comedy;

const styles = StyleSheet.create({
	comedy: {
		width: 120,
		height: 220,
		margin: 5,
		padding: 50,
	},
});
