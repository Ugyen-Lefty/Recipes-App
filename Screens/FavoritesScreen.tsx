import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	ImageBackground,
} from "react-native";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/store/store";
import { selectRecipes, setRecipes } from "../state/favorites/favorites.slice";

export default function FavoritesScreen({ navigation }: any) {
	const [fav, setFavs] = useState<any>([null]);

	const renderItem = ({ item }: { item: any }) => (
		<Card data={item} navigation={navigation}></Card>
	);

	// const selector = useAppSelector(selectRecipes);

	function redirect() {
		navigation.navigate("Recipes");
	}

	useEffect(() => {
		// if (selector) {
		// 	setFavs(selector.filter((favs: any) => favs?.fav));
		// }
		fetch(
			`https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes.json?orderBy="name"`
		)
			.then((response) => response.json())
			.then((res) => {
				setFavs(res.filter((favs: any) => favs?.fav));
			})
			.catch((error) => console.error(error));
	}, [fav]);

	return (
		<>
			{fav.length ? (
				<ImageBackground
					source={{
						uri: "https://49.media.tumblr.com/1073bc050e37a22119d4d878c7e00f83/tumblr_o35cp4TzqU1tizru1o1_500.gif",
						// uri: "https://data.whicdn.com/images/292512295/original.gif",
						// uri: "https://i.pinimg.com/originals/77/c8/6a/77c86ac76126738f64760a531ccaa041.gif",
						// uri: "https://img1.wallspic.com/crops/4/2/8/3/6/163824/163824-food-white-orange-yellow-line-828x1792.jpg",
					}}
					style={styles.backgroundImage}>
					<View style={styles.overlay} />
					<View style={styles.container}>
						<View style={{ marginBottom: 100 }}>
							<FlatList
								data={fav}
								renderItem={renderItem}
								keyExtractor={(item) => item?.name.toString()}
							/>
						</View>
					</View>
				</ImageBackground>
			) : (
				<View style={styles.emptyContainer}>
					<Image
						style={styles.image}
						source={{
							uri: "https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif",
						}}
					/>
					<Text style={styles.title}>No Favorite Recipes Found</Text>
					<TouchableOpacity style={styles.button} onPress={redirect}>
						<Text style={styles.buttonText}>Discover Recipes</Text>
					</TouchableOpacity>
				</View>
			)}
		</>

		// <View style={styles.container}>
		// 	<Text>{recipe?.recipes?.name}</Text>
		// 	{/* <FlatList
		// 		data={recipe}
		// 		renderItem={({ item }) => <Card data={item} />}
		// 		keyExtractor={(item) => item.name}
		// 	/> */}
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 30,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.3)", // Change opacity to adjust darkness
	},
	emptyContainer: {
		paddingVertical: "30%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 25,
		textAlign: "center",
	},
	description: {
		fontSize: 16,
		marginBottom: 32,
		textAlign: "center",
		color: "#edede6",
	},
	button: {
		backgroundColor: "#4285F4",
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 24,
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	image: {
		width: "60%",
		height: "60%",
	},
});
