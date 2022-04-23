import React from "react";
import {
	Image,
	StyleSheet,
	FlatList,
	TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Title } from "react-native-paper";

import { getRomanticMovies } from "../actions/romanticactions";
import { useNavigation } from "@react-navigation/native";

const Romantic = () => {
	const { movies } = useSelector((state) => state.romanticReducers);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	useEffect(() => {
		dispatch(getRomanticMovies());
	}, [dispatch]);
	return (
		<>
			{movies.movies !== undefined ? (
				<>
					<Title
						style={{ color: "white", alignSelf: "center", fontWeight: "900" }}
					>
						Romantic Movies
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
									style={styles.romantic}
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

export default Romantic;

const styles = StyleSheet.create({
	romantic: {
		width: 120,
		height: 220,
		margin: 5,
		padding: 50,
	},
});
