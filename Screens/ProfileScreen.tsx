import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ onsignOut, user }: any) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: user?.photoURL }} style={styles.profileImage} />
			<View style={styles.userInfo}>
				<Text style={styles.name}>{user?.displayName}</Text>
				<Text style={styles.email}>{user?.email}</Text>
			</View>
			<TouchableOpacity style={styles.button} onPress={onsignOut}>
				<Text style={styles.buttonText}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginBottom: 20,
	},
	userInfo: {
		alignItems: "center",
		marginVertical: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 10,
	},
	email: {
		fontSize: 16,
		marginBottom: 5,
	},
	bio: {
		fontSize: 14,
		textAlign: "center",
		marginHorizontal: 20,
	},
	button: {
		marginTop: 50,
		backgroundColor: "#d3423d",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
});
