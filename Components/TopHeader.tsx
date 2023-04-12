import { View, Image, Text, StyleSheet } from "react-native";

export default function TopHeader() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello worldo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  text: {
    color: "white"
  },
  
});
