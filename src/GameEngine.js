import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger, PressFinger } from "./systems";

export default class BestGameEver extends PureComponent {
	render() {
		return (
			<GameEngine
			style={styles.container}
			systems={[MoveFinger, PressFinger]}
			entities={{
				0: { position: [150, 300], renderer: <Finger />},
				1: { position: [200, 300], renderer: <Finger />},
			}}>
				<StatusBar hidden={false} />
			</GameEngine>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
	},
});
