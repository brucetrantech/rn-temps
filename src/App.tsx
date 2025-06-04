import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import {
	ContextThemeProvider,
	Button,
	Text,
} from '@libs';



export default function App() {
	return (
		<ContextThemeProvider
			initialValue={{
				color: {
					light: {
						primary: {
							main: '#007AFF',
							ground: '#D0E3F7',
							shadow: '#D0E3F7',
							touched: '#007AFF',
						},
						secondary: {
							main: '#1BA34D',
							ground: '#',
							shadow: '#',
							touched: '#1AADDA',
						},
						disabled: {
							main: '#B9B9BC',
							ground: '#EFEFF0',
						}
					},
					dark: {
						primary: {
							main: '#1AADDA',
							ground: '#111145',
							shadow: '#123DFC',
							touched: '#146FFF',
						},
						secondary: {
							main: '#1BA34D',
							ground: '#',
							shadow: '#',
							touched: '#1AADDA',
						},
						disabled: {
							main: '#B9B9BC',
							ground: '#EFEFF0',
						}
					},
				},
			}}
		>
			<View style={styles.view}>
				<Text type="large" colorType="secondary" italic>Whereas disregard</Text>
				<Button title="Button" />
			</View>
		</ContextThemeProvider>
  	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		color: '#116FFF',
		fontSize: 18,
		fontWeight: '600',
	}
})