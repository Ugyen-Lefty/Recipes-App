import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./Navigation/navbar";
import { Provider } from "react-redux";
import store from "./state/store/store";
import LoginScreen from "./Screens/LoginScreen";
import "expo-dev-client";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import Constants from "expo-constants";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./state/store/redux-persist";

export default function App() {
	GoogleSignin.configure({
		webClientId: Constants.manifest!.extra!.GOOGLE_SSO,
	});
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState(null);

	function onAuthStateChanged(user: any) {
		setUser(user);
		if (initializing) setInitializing(false);
	}

	async function onGoogleButtonPress() {
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
		const { idToken } = await GoogleSignin.signIn();

		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		return auth().signInWithCredential(googleCredential);
	}

	async function signOut() {
		await GoogleSignin.revokeAccess();
		auth().signOut();
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	if (initializing) return null;

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<StatusBar hidden />
					{user && <Navbar logOut={signOut} user={user} />}
					{!user && <LoginScreen onLogin={onGoogleButtonPress} />}
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
