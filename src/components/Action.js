import {
	FlatList,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActionMovies } from "../actions/actionMovies";
import { Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Action() {
	const { movies } = useSelector((state) => state.actionReducers);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	useEffect(() => {
		dispatch(getActionMovies());
	}, [dispatch]);

	return (
		<>
			{movies.movies !== undefined ? (
				<>
					<Title
						style={{ color: "white", alignSelf: "center", fontWeight: "900" }}
					>
						Action Movies
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
									style={styles.action}
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
}

const styles = StyleSheet.create({
	action: {
		width: 120,
		height: 220,
		margin: 5,
		padding: 50,
	},
});
