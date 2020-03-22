import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import postRegister from '../utils/postRegister';
import getRegister from '../utils/getRegister';

export default () => {

	React.useEffect(() => {
		setInterval(() => getRegister(), 1000)
	}, []);

	return (
		<View style={styles.buttonList}>
			<Button
				style={styles.buttonRegister}
				title="Register"
				onPress={postRegister}
			/>
			<Button
				style={styles.buttonStop}
				title="Stop"
				onPress={() => console.log('Cannot press this one')}
			/>
			<Button
				style={styles.buttonAlert}
				title="Alert"
				onPress={() => console.log('Cannot press this one')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonList: {
		width: 300,
		marginVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
});
