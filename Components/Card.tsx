import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function Card({ data, navigation }: any) {
	function navigate(recipe: any) {
		// navigation.navigate("Details" as never, { data: recipe } as never);
		navigation.navigate("Recipes", {
			screen: "Details",
			params: { data: recipe },
		});
	}

	return (
		// <TouchableOpacity onPress={onPress}>
		<TouchableOpacity onPress={() => navigate(data)}>
			{/* <View style={styles.card}>
				<Image
					source={{
						// uri: "https://wallpapers.com/images/hd/asian-anime-food-ramen-j3pryr55soe062ti.jpg",
						uri: data?.imageURL,
					}}
					style={styles.image}
				/>
				<View style={styles.description}>
					<Text style={styles.descriptionText}>{data?.name}</Text>
					<View style={styles.badge}>
						<Text style={styles.text}>{data?.category}</Text>
					</View>
				</View>
			</View> */}
			<View style={styles.cardContainer}>
				<ImageBackground
					source={{
						uri: data?.imageURL,
					}}
					style={styles.imageContainer}
					imageStyle={styles.imageStyle}>
					<View style={styles.overlay} />
					<Text style={styles.text}>{data?.name}</Text>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 30,
		backgroundColor: "#f2b13b",
	},
	cardList: {
		flex: 1,
		padding: 16,
	},
	card: {
		borderRadius: 8,
		backgroundColor: "#DADADA",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 10,
		marginBottom: 16,
	},
	image: {
		width: "100%",
		height: 100,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	description: {
		padding: 16,
	},
	descriptionText: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
	},
	authorText: {
		fontSize: 14,
		color: "#666",
	},
	badge: {
		backgroundColor: "white",
		borderRadius: 20,
		paddingVertical: 5,
		paddingHorizontal: 10,
		width: "100%",
	},
	// text: {
	// 	color: "black",
	// 	fontSize: 14,
	// 	fontWeight: "bold",
	// },
	cardContainer: {
		borderRadius: 10,
		overflow: "hidden",
		width: "100%",
		height: 250,
		alignSelf: "center",
		marginTop: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 10,
	},
	imageContainer: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
	imageStyle: {
		borderRadius: 10,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "transparent",
		borderBottomColor: "black",
		height: 20,
		opacity: 0.5,
	},
	text: {
		color: "white",
		fontSize: 15,
		fontWeight: "bold",
		textAlign: "center",
		padding: 30,
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: 100,
		backgroundColor: "rgba(0,0,0,0.4)",
	},
});
