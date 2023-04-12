import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const steps = [
	"Preheat oven to 375°F.",
	"Cut the potatoes into small cubes.",
	"In a mixing bowl, whisk together the eggs, milk, salt, and pepper.",
	"Add the potatoes, ham, and cheese to the mixing bowl and stir to combine.",
	"Pour the mixture into a greased baking dish.",
	"Bake for 25-30 minutes, or until the eggs are set and the top is golden brown.",
];
export default function Steps({ data }: any) {
	function renderItem({ item }: any) {
		return (
			<View style={styles.step}>
				<View style={styles.stepNumber}>
					<Icon name="check" size={16} color="#fff" />
				</View>
				<View style={styles.stepTextContainer}>
					<Text style={styles.stepText}>{item}</Text>
				</View>
			</View>
		);
	}

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 16,
		paddingHorizontal: 16,
	},
	step: {
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
	},
	stepNumber: {
		backgroundColor: "#2ecc71",
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 16,
	},
	stepTextContainer: {
		flex: 1,
		borderRadius: 16,
		padding: 16,
		// shadowColor: "#000",
		// shadowOpacity: 0.2,
		// shadowRadius: 4,
		// elevation: 5,
	},
	stepText: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "bold",
	},
});
