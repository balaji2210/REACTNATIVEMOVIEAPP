import React, { useEffect } from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import { ActivityIndicator, Colors } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../actions/banneractions";

export const Banner = () => {
	const { banners } = useSelector((state) => state.bannerReducers);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBanners());
	}, [dispatch]);

	return (
		<>
			{banners.banners !== undefined ? (
				<FlatList
					horizontal
					data={banners.banners}
					keyExtractor={(item) => item._id}
					renderItem={({ item }) => (
						<Image
							style={styles.banner}
							source={{ uri: item.photo.secure_url }}
						/>
					)}
				/>
			) : (
				<ActivityIndicator
					style={{ alignSelf: "center" }}
					animating={true}
					color={Colors.red800}
				/>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	banner: {
		height: 200,
		width: 380,
		margin: 5,
		padding: 25,
	},
	spinner: {
		marginLeft: 180,
	},
});
