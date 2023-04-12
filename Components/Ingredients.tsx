import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

export default function Ingredients({ data }: any) {
	const icons = {
		Meat: "🍖",
		Baking: "🎂",
		Condiments: "🧂",
		Drinks: "🍺",
		Produce: "🥕",
		Misc: "🍴",
		Dairy: "🐮",
	};

	function renderItem({ item }: any) {
		return (
			<View style={styles.card}>
				<View style={styles.front}>
					{/* <Icon name={"star"} size={32} color="" style={} /> */}
					<Text style={styles.icon}>{icons[item?.type as keyof unknown]}</Text>
					<Text style={styles.title}>{item?.name}</Text>
				</View>
			</View>
		);
	}
	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item.name.toString()}
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "100%",
		backgroundColor: "#f4f4f4",
		borderRadius: 16,
		shadowColor: "#f7ca18",
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 5,
		marginTop: 16,
		marginBottom: 8,
		padding: 7,
	},
	front: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		paddingHorizontal: 16,
	},
	icon: {
		marginHorizontal: 10,
		backgroundColor: "white",
		fontSize: 20,
		padding: 7,
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		marginLeft: 40,
		paddingRight: 20,
		fontWeight: "bold",
		textAlign: "left",
	},
});
