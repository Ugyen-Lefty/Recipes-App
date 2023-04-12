// import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	StatusBar,
	ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./Navigation/navbar";
import { useEffect } from "react";
import HabitsTab from "./Components/Header";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./state/store/store";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				{/* <StatusBar
				style="light"
				backgroundColor="transparent"
				translucent={true}
			/> */}
				<StatusBar hidden />
				<Navbar></Navbar>
				{/* <Header /> */}
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},
});
