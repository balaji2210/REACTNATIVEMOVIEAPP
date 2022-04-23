import Action from "./Action";
import Comedy from "./Comedy";
import Thriller from "./Thriller";
import Romantic from "./Romantic";
import { Banner as ImageBanner } from "./Banner";

import {
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	RefreshControl,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { searchMovie } from "../actions/searchmovieactions";
import { useNavigation } from "@react-navigation/native";
import { getBanners } from "../actions/banneractions";
import { getActionMovies } from "../actions/actionMovies";
import { getComedyMovies } from "../actions/comedyactions";
import { getThriller } from "../actions/thrilleraction";
import { getRomanticMovies } from "../actions/romanticactions";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const Home = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const onChangeSearch = (query) => setSearchQuery(query);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handelSubmit = () => {
		dispatch(searchMovie(searchQuery));
		navigation.navigate("Search");
	};

	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		dispatch(getBanners());
		dispatch(getActionMovies());
		dispatch(getComedyMovies());
		dispatch(getThriller());
		dispatch(getRomanticMovies());
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	return (
		<SafeAreaView style={[styles.container]}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View style={styles.search}>
					<Searchbar
						placeholder="Search"
						onChangeText={onChangeSearch}
						value={searchQuery}
						onSubmitEditing={handelSubmit}
					/>
				</View>
				<ImageBanner />
				<Action />
				<Comedy />
				<Thriller />
				<Romantic />
			</ScrollView>
			<ExpoStatusBar style="auto" />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
	},
	search: {
		padding: 16,
	},
});
