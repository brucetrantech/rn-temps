import React from 'react';
import {
	Text as RNText,
	StyleSheet,
	View,
} from 'react-native';
import {
	Text,
	ContextThemeProvider,
} from '@libs';



export default function App() {
	return (
		<ContextThemeProvider
			initialValue={{
				state: {
					color: {
						primary: {
							main: '#1AADDA',
							ground: '#1BA34D',
							shadow: '#123DFC',
							touched: '#146FFF',
						},
						secondary: {
							main: '#1BA34D',
							ground: '#',
							shadow: '#',
							touched: '#1AADDA',
						},
					}
				}
			}}
		>
			<View style={styles.view}>
				{/* <RNText style={{
					fontSize: 34,
					fontWeight: '700',
					color: '#123DFC',
				}}>Whereas disregard</RNText>

				<Text type="large" color="primary">Whereas disregard</Text>
				<RNText
					style={{
						fontSize: 34,
						fontWeight: '700',
						color: '#000123',
					}}
				>Whereas disregard</RNText> */}
				<Text type="large" color="secondary" italic>Whereas disregard</Text>
				<Text type="title1" color="primary" italic>Whereas disregard</Text>
				<Text type="title2" color="secondary" italic>Whereas disregard</Text>
				<Text type="title3" color="primary" italic>Whereas disregard</Text>
				<Text type="headline" color="secondary" bold italic>Whereas disregard</Text>
				<Text type="body" color="primary" italic>Whereas disregard</Text>
				<Text type="callout" color="secondary">Whereas disregard</Text>
				<Text type="subheadline" color="primary">Whereas disregard</Text>
				<Text type="footnote" color="secondary">Whereas disregard</Text>
				<Text type="caption" color="primary">Whereas disregard</Text>
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