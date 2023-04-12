import { View, Image, StyleSheet } from "react-native";

export default function Avatar() {
	return (
		<View style={styles.container}>
			<Image
				style={{
					width: 50,
					height: 50,
					borderRadius: 50,
				}}
				source={{
					uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
});
