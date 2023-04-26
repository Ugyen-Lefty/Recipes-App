import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Badge } from "react-native-elements";
import Ingredients from "../Components/Ingredients";
import Steps from "../Components/Steps";
import WebView from "react-native-webview";

export default function DetailsScreen({ route, navigation }: any) {
	const { data } = route?.params;

	const [isFavorite, setIsFavorite] = React.useState(data?.fav);
	const [isWebView, setIsWebView] = React.useState(false);

	function handleFavoritePress() {
		setIsFavorite(!isFavorite);
		fetch(
			`https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes/${data?.id}.json`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fav: !isFavorite,
				}),
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then()
			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error);
			});
	}

	function goToWebView() {
		setIsWebView(true);
	}

	function goBack() {
		navigation.navigate("Main" as never);
	}

	return (
		<>
			{isWebView ? (
				<View style={{ flex: 1 }}>
					<WebView source={{ uri: data?.originalURL }} style={{ flex: 1 }} />
				</View>
			) : (
				<ScrollView style={{ marginBottom: 100 }}>
					<View style={styles.container}>
						<View style={styles.header}>
							<TouchableOpacity onPress={goBack}>
								<Icon
									name="chevron-left"
									size={20}
									color="#f7ca18"
									style={styles.back}
								/>
							</TouchableOpacity>
							<Text style={styles.title}>{data?.name}</Text>
							<TouchableOpacity onPress={handleFavoritePress}>
								<Icon
									name={isFavorite ? "star" : "star-o"}
									size={24}
									color="#f7ca18"
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.imageContainer}>
							<Image source={{ uri: data?.imageURL }} style={styles.image} />
						</View>
						<View style={styles.ingredientsContainer}>
							<Text style={styles.sectionTitle}>Ingredients</Text>
							<Ingredients data={data?.ingredients} />
						</View>
						<View style={styles.stepsContainer}>
							<Text style={styles.sectionTitle}>Steps</Text>
							<Steps data={data?.steps} />
						</View>
						{data?.originalURL && (
							<View style={styles.stepsContainer}>
								<Text style={styles.sectionTitle}>
									For more information you can visit
								</Text>
								<TouchableOpacity onPress={goToWebView}>
									<Text style={{ fontSize: 18, color: "#2ecc71", margin: 10 }}>
										{data?.originalURL}
									</Text>
								</TouchableOpacity>
							</View>
						)}
					</View>
				</ScrollView>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	back: {
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 30,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
	},
	imageContainer: {
		marginHorizontal: 30,
		marginVertical: 30,
		borderRadius: 16,
		shadowColor: "#f7ca18",
		shadowOpacity: 1,
		shadowRadius: 50,
		elevation: 10,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 16,
	},
	descriptionContainer: {
		paddingHorizontal: 20,
		paddingBottom: 30,
	},
	description: {
		fontSize: 16,
		lineHeight: 23,
		textAlign: "justify",
	},
	ingredientsContainer: {
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	sectionTitle: {
		fontSize: 23,
		textAlign: "center",

		letterSpacing: 2,
		fontWeight: "bold",
		marginBottom: 8,
	},
	badgeContainer: {
		backgroundColor: "#2ecc71",
		marginRight: 8,
	},
	badgeText: {
		color: "#fff",
	},
	stepsContainer: {
		paddingHorizontal: 16,
		marginVertical: 30,
		marginBottom: 50,
	},
	step: {
		flexDirection: "row",
		marginBottom: 8,
	},
	stepNumber: {
		backgroundColor: "#f7ca18",
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 8,
	},
	stepNumberText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	stepText: {
		fontSize: 16,
		lineHeight: 24,
	},
});
