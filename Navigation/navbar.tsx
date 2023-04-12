import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import RecipesScreen from "../Screens/RecipesScreen";
import FavoriteScreen from "../Screens/FavoritesScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import Icon from "react-native-vector-icons/Ionicons";
import {
	TouchableOpacity,
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	ImageBackground,
	Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import Avatar from "../Components/Avatar";
import Exp from "../Components/Exp";
import SearchScreen from "../Screens/SearchScreen";
import { useAppDispatch } from "../state/store/store";
import { setRecipes } from "../state/favorites/favorites.slice";

export default function Navbar() {
	const Tab = createBottomTabNavigator();
	const Stack = createStackNavigator();
	// const dispatch = useAppDispatch();

	const CustomButton = ({ children, onPress }: any) => (
		<TouchableOpacity style={styles.centerButton} onPress={onPress}>
			<View>{children}</View>
		</TouchableOpacity>
	);
	const [random, setRandom] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			getAllRecipes();
		};
		fetchData();
	}, []);

	function getAllRecipes() {
		const recipesArr: any = [];
		fetch(
			// For Search
			//https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes/Recipes.json?orderBy=%22name%22&startAt=%22C%22
			//For Exact query or search
			//https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipe.json?orderBy="Name"&startAt="Chicken"&limitToFirst=10&endAt="Chicken+\uf8ff"
			`https://yum-foods-default-rtdb.asia-southeast1.firebasedatabase.app/Recipes.json?orderBy="name"`,
			{
				method: "GET",
			}
		).then((res) =>
			res.json().then((recipes) => {
				// dispatch(setRecipes(recipes));
				for (const key in recipes) {
					recipesArr.push(key);
				}
				const randomIndex = Math.floor(Math.random() * recipesArr.length);
				setRandom({ ...recipes[recipesArr[randomIndex]] });
			})
		);
	}

	return (
		<Tab.Navigator
			screenOptions={{
				headerStyle: {
					height: 150,
					backgroundColor: "black",
				},
				// headerLeft: () => <Avatar />,
				headerTitle: () => (
					<View style={styles.header}>
						<Image
							source={{
								uri: "https://wallpapers.com/images/hd/asian-anime-food-ramen-j3pryr55soe062ti.jpg",
								// uri: "https://i.pinimg.com/originals/41/d7/19/41d7198d3cdd94cf1f2b5956bd10851b.jpg",
							}}
							style={styles.image}
						/>
						<Text style={styles.title}>Yum 😋</Text>
					</View>
					// <ImageBackground
					// 	source={{
					// 		uri: "https://wallpapers.com/images/hd/asian-anime-food-ramen-j3pryr55soe062ti.jpg",
					// 	}}
					// 	style={styles.headerBackground}>
					// </ImageBackground>
				),
				// <Header />
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 20,
					right: 20,
					borderRadius: 15,
					height: 90,
				},
				// headerRight: () => (
				// 	<View style={{ marginRight: 50 }}>
				// 		<Button onPress={() => alert("This is a button!")} title="Info" />
				// 	</View>
				// ),
			}}>
			<Tab.Screen
				name="Home"
				// component={HomeScreen}
				// children={() => <HomeScreen random={random} />}
				// {(props) => <RecipesScreen {...props} />}
				// {(props) => <RecipesScreen {...props} />}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="home-sharp"
								size={25}
								color={focused ? "#d3423d" : "#748c94"}
							/>
						</View>
					),
				}}>
				{(props) => <HomeScreen random={random} {...props} />}
			</Tab.Screen>
			<Tab.Screen
				name="Recipes"
				// children={() => {}}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="list"
								size={25}
								color={focused ? "#d3423d" : "#748c94"}
							/>
						</View>
					),
				}}
				children={() => (
					<Stack.Navigator initialRouteName="Main">
						<Stack.Screen
							options={{
								headerStyle: {
									height: 150,
									backgroundColor: "black",
								},
								headerTitle: (route) => (
									<View style={styles.header}>
										<Image
											source={{
												uri: "https://images.yen.com.gh/images/dad6452597f9313d.jpg",
											}}
											style={styles.image}
										/>
										<Text style={styles.title}>All Recipes 🍳</Text>
									</View>
								),
							}}
							name="Main">
							{(props) => <RecipesScreen {...props} />}
						</Stack.Screen>
						<Stack.Screen
							options={{
								headerShown: false,
							}}
							name="Details">
							{(props) => <DetailsScreen {...props} />}
						</Stack.Screen>
					</Stack.Navigator>
				)}
			/>
			<Tab.Screen
				name="test1"
				component={SettingsScreen}
				options={{
					headerTitle: () => (
						<View style={styles.header}>
							<Image
								source={{
									uri: "https://vignette.wikia.nocookie.net/bd86db28-dd40-441b-82a4-a0d97f8e721b/scale-to-width-down/1200",
								}}
								style={styles.image}
							/>
							<Text style={styles.title}>Share Your Recipe 🍴</Text>
						</View>
					),
					tabBarIcon: () => (
						<View>
							<Icon name="add" size={30} color="white" />
						</View>
					),
					tabBarButton: (props) => <CustomButton {...props} />,
				}}
			/>
			<Tab.Screen
				name="fav"
				component={FavoriteScreen}
				options={{
					headerTitle: () => (
						<View style={styles.header}>
							<Image
								source={{
									uri: "https://jw-webmagazine.com/wp-content/uploads/2020/11/Howls-Moving-Castle-Food.jpg",
								}}
								style={styles.image}
							/>
							<Text style={styles.title}>Favorites 🤩</Text>
						</View>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="star"
								size={25}
								color={focused ? "#d3423d" : "#748c94"}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					headerTitle: () => (
						<View style={styles.header}>
							<Image
								source={{
									uri: "https://jw-webmagazine.com/wp-content/uploads/2020/11/Howls-Moving-Castle-Food.jpg",
								}}
								style={styles.image}
							/>
							<Text style={styles.title}>Search Recipes 🔍</Text>
						</View>
					),
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="search"
								size={25}
								color={focused ? "#d3423d" : "#748c94"}
							/>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	image: {
		position: "relative",
		width: "110%",
		height: "100%",
		opacity: 0.7,
		shadowColor: "black",
	},
	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	title: {
		position: "absolute",
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
		alignSelf: "center",
		color: "white",
	},
	headerBackground: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		opacity: 0.8,
	},
	centerButton: {
		top: -10,
		justifyContent: "center",
		alignItems: "center",
		width: 70,
		height: 70,
		borderRadius: 50,
		backgroundColor: "#d3423d",
		shadowColor: "#7F5DFO",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});
