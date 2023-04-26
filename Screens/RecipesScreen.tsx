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
import { fetchFavorites } from "../state/favorites/favorites.slice";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../state/favorites/favorites.slice";
import { fetchData } from "../state/favorites/reducer";
import { useAppDispatch } from "../state/store/store";

export default function RecipesScreen({ navigation }: any) {
	const [recipe, setRecipes] = useState<any>(null);

	const renderItem = ({ item }: { item: any }) => (
		<Card data={item} navigation={navigation}></Card>
	);

	const dispatch = useAppDispatch();
	const data = useSelector((state: any) => state.data.data);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<ImageBackground
			source={{
				uri: "https://49.media.tumblr.com/1073bc050e37a22119d4d878c7e00f83/tumblr_o35cp4TzqU1tizru1o1_500.gif",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<View style={styles.container}>
				<View style={{ marginBottom: 100 }}>
					<FlatList
						data={data}
						renderItem={renderItem}
						keyExtractor={(item) => item.name.toString()}
					/>
				</View>
			</View>
		</ImageBackground>
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
		backgroundColor: "rgba(0,0,0,0.3)",
	},
});
