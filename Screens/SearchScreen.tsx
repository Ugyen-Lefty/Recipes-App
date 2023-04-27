import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchScreen({ navigation }: any) {
	const [recipe, setRecipes] = useState<any>(null);

	const renderItem = ({ item }: { item: any }) => (
		<Card data={item} navigation={navigation}></Card>
	);

	useEffect(() => {
		fetch(
			`https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes.json?orderBy="name"`
		)
			.then((response) => response.json())
			.then((json) => setRecipes(json))
			.catch((error) => console.error(error));
	}, []);

	return (
		<KeyboardAvoidingView
			behavior="padding"
			style={{ flex: 1 }}
			keyboardVerticalOffset={-10000}>
			<ImageBackground
				source={{
					uri: "https://thumbs.gfycat.com/MistyBleakDrongo-size_restricted.gif",
				}}
				style={styles.backgroundImage}>
				<View style={styles.overlay} />
				{/* <View style={styles.container}>
				<View style={{ marginBottom: 100 }}>
					<FlatList
						data={recipe}
						renderItem={renderItem}
						keyExtractor={(item) => item.name.toString()}
					/>
				</View>
			</View> */}
				<View style={styles.container}>
					<View style={styles.searchBox}>
						<AntDesign
							name="search1"
							size={24}
							color="#A9A9A9"
							style={styles.icon}
						/>
						<TextInput
							placeholder="Search for recipes"
							style={styles.input}
							placeholderTextColor="#A9A9A9"
						/>
					</View>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
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
	// container: {
	// 	flex: 1,
	// 	flexDirection: "column",
	// 	padding: 30,
	// },
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.3)", // Change opacity to adjust darkness
	},
	container: {
		paddingVertical: 30,
		paddingHorizontal: 16,
	},
	searchBox: {
		backgroundColor: "#fff",
		borderRadius: 16,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 12,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
	},
	icon: {
		marginRight: 8,
	},
	input: {
		flex: 1,
		fontSize: 16,
		fontWeight: "500",
		color: "#333",
		paddingVertical: 12,
	},
});
