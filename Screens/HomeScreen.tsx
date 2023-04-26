import { useEffect, useState, useCallback } from "react";
import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView,
	RefreshControl,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Motion } from "@legendapp/motion";

export default function HomeScreen({ random, navigation, reload }: any) {
	const [refreshing, setRefreshing] = useState(false);

	const refresh = useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
			reload();
		}, 2000);
	}, []);

	function navigate(recipe: any) {
		navigation.navigate("Recipes", {
			screen: "Details",
			params: { data: recipe },
		});
	}

	return (
		<ImageBackground
			source={{
				uri: "https://49.media.tumblr.com/1073bc050e37a22119d4d878c7e00f83/tumblr_o35cp4TzqU1tizru1o1_500.gif",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={refresh} />
				}>
				<View style={styles.container}>
					<Motion.View
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: "spring", stiffness: 100 }}>
						<TouchableOpacity onPress={() => navigate(random)}>
							<View style={styles.card}>
								<Text style={styles.text}>Recipe of the day</Text>
								<Image
									source={{
										uri: random?.imageURL,
									}}
									key={random?.imageURL}
									style={styles.image}
								/>
								<Text style={styles.smallText}>{random?.name}</Text>
							</View>
						</TouchableOpacity>
					</Motion.View>
				</View>
			</ScrollView>
		</ImageBackground>
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
		flex: 1,
		flexDirection: "column",
		padding: 30,
	},
	text: {
		fontSize: 30,
		textAlign: "center",
		paddingBottom: 20,
	},
	smallText: {
		textAlign: "center",
	},
	card: {
		height: "87%",
		borderRadius: 10,
		backgroundColor: "#fff",
		elevation: 10,
		shadowColor: "#000",
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 2,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 20,
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
		borderRadius: 10,
		marginBottom: 10,
	},
	scrollView: {
		flex: 1,
	},
});
