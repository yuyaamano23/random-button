import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
	console.log("うんこいっぱいでたねおめでとう");
	return (
		<>
			<StatusBar style="auto" />
			<SafeAreaView style={{ flex: 1 }}>
				<WebView source={{ uri: "https://zenn.dev" }} />
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
