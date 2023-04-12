import { Button, Image, View, Text, StyleSheet } from "react-native";
import { Bar as ProgressBar } from "react-native-progress";
import Icon from "react-native-vector-icons/Ionicons";

export default function Exp() {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.name}>Lefty</Text>
				<Text style={styles.level}>Level - 1</Text>
			</View>
			{/* <View style={{ flexDirection: "row" }}>
				<Text style={{}}>Title</Text>
			</View> */}
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
				}}>
				<Icon
					name="star"
					size={20}
					color="#ffff9f"
					style={{ marginRight: 10 }}
				/>
				<ProgressBar
					animationType={"timing"}
					borderRadius={50}
					borderColor={"black"}
					color="blue"
					progress={0.3}
					width={250}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingTop: 10,
	},
	textContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	name: {
		fontSize: 20,
		marginBottom: 5,
	},
	level: {
		marginBottom: 5,
	},
	title: {
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});
