import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonList from './components/ButtonList';
import Diagram from './components/Diagram';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>CORONABLUE</Text>
			<View>
				<Diagram />
			</View>
			<Text style={styles.notifText}>Searching...</Text>
			<ButtonList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	headerText: {
		textAlign: 'center'
	},
	notifText: {
		textAlign: 'center'
	}
});
