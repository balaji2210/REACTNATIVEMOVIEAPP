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
import { getThriller } from "../actions/thrilleraction";
import { useNavigation } from "@react-navigation/native";

const Thriller = () => {
	const { movies } = useSelector((state) => state.thrillerReducers);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	useEffect(() => {
		dispatch(getThriller());
	}, [dispatch]);
	return (
		<>
			{movies.movies !== undefined ? (
				<>
					<Title
						style={{ color: "white", alignSelf: "center", fontWeight: "900" }}
					>
						Thriller Movies
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
									style={styles.thriller}
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

export default Thriller;

const styles = StyleSheet.create({
	thriller: {
		width: 120,
		height: 220,
		margin: 5,
		padding: 50,
	},
});
