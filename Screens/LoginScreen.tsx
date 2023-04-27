import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ onLogin }: any) {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: "https://i.pinimg.com/originals/01/b7/0e/01b70e161162a92685d0ebbb45acf5ba.gif",
				}}
				style={styles.appLogo}
			/>
			<View style={styles.socialLogin}>
				<TouchableOpacity style={styles.button} onPress={onLogin}>
					<Image
						source={{
							uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png",
						}}
						style={styles.logo}
					/>
					<Text style={styles.text}>Sign in with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.fButton} onPress={onLogin}>
					<Image
						source={{
							uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
						}}
						style={styles.logo}
					/>
					<Text style={styles.text}>Sign in with Facebook</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#051f2f",
		height: "100%",
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#de4032",
		borderRadius: 4,
		padding: 10,
		marginBottom: 30,
	},
	fButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#1178f2",
		borderRadius: 4,
		padding: 10,
		marginBottom: 50,
	},
	logo: {
		width: 25,
		height: 25,
		margin: 10,
		padding: 10,
		marginRight: 30,
	},
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	appLogo: {
		width: 250,
		height: 300,
		marginBottom: 50,
		marginTop: 100,
		borderRadius: 50,
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
	},
	socialLogin: {
		justifyContent: "flex-end",
		width: "80%",
	},
	googleButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#db4437",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginRight: 10,
		marginBottom: 30,
	},
	facebookButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#db4437",
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginRight: 10,
	},
});
