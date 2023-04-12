import { Text, View, StyleSheet, Image } from "react-native";

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.text}>For you 🍴</Text>
				<Image
					source={{ uri: "https://wallpaperaccess.com/full/1322048.jpg" }}
					style={styles.image}
				/>
				<Text style={styles.smallText}>
					Name of the food la in handwriting font
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 30,
		backgroundColor: "#f2b13b",
	},
	text: {
		fontSize: 30,
		textAlign: "center",
		paddingBottom: 20,
	},
	smallText: {
		textAlign: "center",
	},
	card: {
		height: "80%",
		borderRadius: 10,
		backgroundColor: "#fff",
		elevation: 10,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 20,
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
		borderRadius: 10,
		marginBottom: 10,
	},
});
