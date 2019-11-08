import { h } from 'preact'
import { ReactSpringExample } from './ReactSpringExample'
import { StylesComponentsExample } from './StylesComponentsExample'

export default function App() {
	return (
		<div>
			<h1>Typescript Preact Test</h1>
			<ReactSpringExample/>
			<StylesComponentsExample />
		</div>
	);
}
