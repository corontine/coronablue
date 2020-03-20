import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Diagram from './components/Diagram';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>CORONABLUE</Text>
			<View>
				<Diagram />
			</View>
			<Text style={styles.notifText}>Searching...</Text>
			<View style={styles.buttonList}>
				<Button
					style={styles.buttonRegister}
					title="Register"
					onPress={() => Alert.alert('Cannot press this one')}
				/>
				<Button
					style={styles.buttonStop}
					title="Stop"
					onPress={() => Alert.alert('Cannot press this one')}
				/>
				<Button
					style={styles.buttonAlert}
					title="Alert"
					onPress={() => Alert.alert('Cannot press this one')}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around',
		textAlign: 'center'
	},
	buttonList: {
		width: 300,
		marginVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});
