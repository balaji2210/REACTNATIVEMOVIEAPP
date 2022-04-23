import {
	View,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ActivityIndicator, Colors, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
	const { search, loading } = useSelector((state) => state.searchReducers);
	const navigation = useNavigation();

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator
					style={styles.spinner}
					animating={true}
					color={Colors.red800}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<>
				{search.movies !== undefined && search.movies.length !== 0 ? (
					<>
						<FlatList
							numColumns={3}
							data={search.movies}
							keyExtractor={(item) => item._id}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										navigation.navigate("Player", {
											Id: item._id,
										});
									}}
								>
									<Image
										style={styles.img}
										source={{ uri: item.photo.secure_url }}
									/>
								</TouchableOpacity>
							)}
						/>
					</>
				) : (
					<View style={styles.title}>
						<Title style={{ color: "#fff" }}>No Search Results </Title>
					</View>
				)}
			</>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		flex: 1,
	},

	spinner: {
		alignSelf: "center",
		marginTop: 50,
		marginHorizontal: 180,
	},
	img: {
		width: 110,
		height: 200,
		margin: 10,
	},
	scroll: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	title: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
