import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<Image
				source={{ uri: "https://via.placeholder.com/150" }}
				style={styles.backgroundImage}
			/>
			<View style={styles.overlay} />
			<View style={styles.contentContainer}>
				<Image
					source={{ uri: "https://via.placeholder.com/150" }}
					style={styles.avatarImage}
				/>
				<View style={styles.profileInfo}>
					<Text style={styles.userName}>John Doe</Text>
					<View style={styles.experienceBar}>
						<View style={styles.experienceProgress} />
					</View>
					<View style={styles.levelContainer}>
						<Text style={styles.levelText}>Level 5</Text>
					</View>
					<Text style={styles.userTitle}>Software Engineer</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		position: "relative",
		height: 200,
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	},
	contentContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: "center",
		paddingBottom: 10,
		flexDirection: "row",
	},
	avatarImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "white",
		marginRight: 10,
	},
	profileInfo: {
		flex: 1,
		justifyContent: "center",
	},
	userName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
	experienceBar: {
		height: 10,
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 5,
	},
	experienceProgress: {
		height: 10,
		backgroundColor: "#fff",
		borderRadius: 5,
		width: "50%",
	},
	levelContainer: {
		backgroundColor: "white",
		borderRadius: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		alignSelf: "flex-start",
	},
	levelText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#f2b13b",
	},
	userTitle: {
		fontSize: 16,
		fontWeight: "bold",
		color: "white",
	},
});

export default Header;
