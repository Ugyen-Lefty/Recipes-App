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

export default function HomeScreen({ random, navigation }: any) {
	function navigate(recipe: any) {
		// navigation.navigate("Details" as never, { data: recipe } as never);
		navigation.navigate("Recipes", {
			screen: "Details",
			params: { data: recipe },
		});
	}
	return (
		<ImageBackground
			source={{
				uri: "https://49.media.tumblr.com/1073bc050e37a22119d4d878c7e00f83/tumblr_o35cp4TzqU1tizru1o1_500.gif",
				// uri: "https://data.whicdn.com/images/292512295/original.gif",
				// uri: "https://i.pinimg.com/originals/77/c8/6a/77c86ac76126738f64760a531ccaa041.gif",
				// uri: "https://img1.wallspic.com/crops/4/2/8/3/6/163824/163824-food-white-orange-yellow-line-828x1792.jpg",
			}}
			style={styles.backgroundImage}>
			<View style={styles.overlay} />
			<ScrollView
				contentContainerStyle={styles.scrollView}
				// refreshControl={
				// 	<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				// }
			>
				<View style={styles.container}>
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
							<Text style={styles.smallText}>
								{/* Name of the food la in handwriting font */}
								{random?.name}
							</Text>
						</View>
					</TouchableOpacity>
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
		backgroundColor: "rgba(0,0,0,0.3)", // Change opacity to adjust darkness
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
