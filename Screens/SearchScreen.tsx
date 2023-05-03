import {
	View,
	StyleSheet,
	FlatList,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useAppDispatch } from "../state/store/store";
import { useSelector } from "react-redux";
import { fetchData } from "../state/favorites/reducer";

export default function SearchScreen({ navigation }: any) {
	const [recipe, setRecipes] = useState<any>(null);
	const [search, setSearch] = useState<any>(null);

	const renderItem = ({ item }: { item: any }) => (
		<Card data={item} navigation={navigation}></Card>
	);

	const dispatch = useAppDispatch();
	const data = useSelector((state: any) => state.data.data);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	function searchRecipes(text: any) {
		setSearch(text);
		const result = data.filter((item: any) => {
			return item?.name.toLowerCase().includes(text.toLowerCase());
		});
		setRecipes(result);
	}

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
							onChangeText={searchRecipes}
						/>
					</View>
					{search && (
						<View style={styles.searchContainer}>
							<View style={{ marginBottom: 100 }}>
								<FlatList
									data={recipe}
									renderItem={renderItem}
									keyExtractor={(item) => item?.name.toString()}
								/>
							</View>
						</View>
					)}
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.3)",
	},
	container: {
		paddingVertical: 30,
		paddingHorizontal: 16,
	},
	searchContainer: {
		padding: 30,
		marginBottom: 80,
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
