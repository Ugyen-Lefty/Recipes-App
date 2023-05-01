import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function ProfileScreen({ onsignOut, user }: any) {
	const [location, setLocation] = useState(null);
	const [placeName, setPlaceName] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				return;
			}

			const location = await Location.getCurrentPositionAsync({});
			setLocation(location as any);

			let place = await Location.reverseGeocodeAsync({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
			});
			setPlaceName(place[0] as any);
		})();
	}, []);

	return (
		<View style={styles.container}>
			<Image source={{ uri: user?.photoURL }} style={styles.profileImage} />
			<View style={styles.userInfo}>
				<Text style={styles.name}>{user?.displayName}</Text>
				<Text style={styles.email}>{user?.email}</Text>
			</View>
			{location && (
				<Text style={styles.email}>
					Logged in from:
					<Text style={styles.locationText}>
						{" " +
							(placeName as any)?.city +
							" , " +
							(placeName as any)?.country}
					</Text>
				</Text>
			)}
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
	locationText: {
		fontSize: 16,
	},
});
